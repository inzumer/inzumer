import { render, screen } from '@testing-library/react';
import { dialogLabels, projectFixture } from '@test/projects';
import { ProjectGallery } from '../ProjectGallery';

const { images } = projectFixture('belo', 'Belo');

describe('ProjectGallery', () => {
  it('should show every screen as a named slide with tracked buttons', () => {
    render(<ProjectGallery slug="belo" images={images} labels={dialogLabels.gallery} />);

    expect(screen.getByRole('region', { name: 'Pantallas' })).toBeInTheDocument();
    expect(screen.getByRole('group', { name: 'Pantalla 2 / 2' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Belo screen' })).toHaveAttribute('loading', 'lazy');
    expect(
      screen.getByRole('link', { name: 'Belo screen · se abre en tamaño completo' }),
    ).toHaveAttribute('href', '/belo-1.webp');
    expect(screen.getByRole('button', { name: 'Pantalla siguiente' })).toHaveAttribute(
      'id',
      'gallery-button-next-belo',
    );
    expect(screen.getByRole('button', { name: 'Ir a la pantalla 1' })).toBeInTheDocument();
  });

  it('should leave out the buttons with a single screen', () => {
    render(
      <ProjectGallery slug="belo" images={images.slice(0, 1)} labels={dialogLabels.gallery} />,
    );

    expect(screen.queryByRole('button', { name: 'Pantalla siguiente' })).not.toBeInTheDocument();
  });

  it('should drop the dots when there are too many screens to fit', () => {
    const many = Array.from({ length: 7 }, (_, index) => ({
      ...projectFixture('belo', 'Belo').cover,
      src: `/${index}.webp`,
    }));
    render(<ProjectGallery slug="belo" images={many} labels={dialogLabels.gallery} />);

    expect(screen.queryByRole('button', { name: 'Ir a la pantalla 1' })).not.toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Pantalla siguiente' })).toBeInTheDocument();
  });

  it('should render nothing without screens', () => {
    const { container } = render(
      <ProjectGallery slug="belo" images={[]} labels={dialogLabels.gallery} />,
    );

    expect(container).toBeEmptyDOMElement();
  });
});
