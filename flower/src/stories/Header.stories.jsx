import Header from '../components/Header';
import imgLogo from '../assets/logo.jpg'
import anotherlogo from '../../backend/public/images/bouquet-drops-of-happiness.jpg'
import './index.css';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    title: { control: 'text' },
    logo: { control: 'text' },
  },
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Bouquet',
  logo: imgLogo,
};

export const WithCustomTitle = Template.bind({});
WithCustomTitle.args = {
  title: 'Новий заголовок',
  logo: imgLogo
};

export const AnotherLogo = Template.bind({});
AnotherLogo.args = {
  title: 'Bouquet',
  logo: anotherlogo,
};
