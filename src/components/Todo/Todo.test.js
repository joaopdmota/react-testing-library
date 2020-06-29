import React from 'react';
import { render, waitForElement, fireEvent } from '@testing-library/react';
import Todo from './';

describe('Tests for Todo component', () => {
    it('Should add new task when form has been submitted', async () => {
        const { getByTestId, getByText } = render(<Todo />);
        const fieldNode = await waitForElement(() => getByTestId('form-field'));
        const btnNode = await waitForElement(() => getByTestId('form-btn'));
        const newTask = 'testing';

        fireEvent.change(fieldNode, { target: { value: newTask } });
        expect(fieldNode.value).toEqual(newTask);

        fireEvent.click(btnNode);
        const tdNode = await (waitForElement(() => getByText(newTask)))
        expect(tdNode).toBeDefined();
    });
});