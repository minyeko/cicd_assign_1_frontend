import React from 'react';
import renderer from 'react-test-renderer';
import MainForm from "./components/MainForm";


test('renders correctly', () => {
    const component = renderer.create(<MainForm />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});