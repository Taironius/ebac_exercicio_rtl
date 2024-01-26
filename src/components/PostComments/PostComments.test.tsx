import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test('Inserindo 02 Comentarios', () => {
        const { debug } = render(<PostComment />);
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Indestrutivel'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'Resistente'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'))
        debug()
        expect(screen.getByText('Indestrutivel')).toBeInTheDocument()
        expect(screen.getByText('Resistente')).toBeInTheDocument()
    });
});