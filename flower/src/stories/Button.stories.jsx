import React from 'react';
import Button from '../components/UI/Button';
import './index.css';

export default {
  title: 'Components/UI/Button', 
  component: Button,
  argTypes: {
    children: { control: 'text' },
    textOnly: { control: 'boolean' }, 
    className: { control: 'text' }, 
  },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Натисни мене', 
  textOnly: false,           
  className: '',            
};

export const TextOnlyButton = Template.bind({});
TextOnlyButton.args = {
  children: 'Текстова кнопка', 
  textOnly: true,             
  className: '',              
};

export const CustomClassButton = Template.bind({});
CustomClassButton.args = {
  children: 'Кнопка кастомна', 
  textOnly: false,             
  className: 'custom-class',   
};
