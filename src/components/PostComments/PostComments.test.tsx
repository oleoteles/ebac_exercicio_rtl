import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar os comentários corretamente abaixo', () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'que massa!',
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'));

        fireEvent.change(screen.getByTestId('campo-comentario'), {
            target: {
                value: 'fenomenal! quero uma igual.',
            }
        })
        fireEvent.click(screen.getByTestId('btn-comentar'));

        expect(screen.getAllByTestId('comentario')).toHaveLength(2)
    })
});