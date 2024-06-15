import {OnboardingData} from '../../types/types.interface';

const data: OnboardingData[] = [
  {
    id: 1,
    animation: require('../../../assets/Lottie/Lottie1.json'),
    text: 'Prioritization and Focus',
    description:
      "Todo lists help you identify and prioritize your most critical tasks, allowing you to focus your energy on high-impact activities. This ensures that important deadlines and responsibilities are met, while less urgent matters don't monopolize your attention.",
  },
  {
    id: 2,
    animation: require('../../../assets/Lottie/Lottie2.json'),
    text: 'Reduced Stress and Mental Clarity',
    description:
      'By externalizing your tasks onto a list, you free up mental bandwidth. This "brain dump" reduces the anxiety of trying to remember everything, leading to greater peace of mind and clearer thinking.',
  },
  {
    id: 3,
    animation: require('../../../assets/Lottie/Lottie3.json'),
    text: 'Progress Tracking and Motivation',
    description:
      'Checking items off a todo list provides a tangible sense of accomplishment. This visual representation of progress can boost motivation, as you see yourself advancing towards your goals, and can help maintain momentum even on challenging days.',
  },
];

export default data;
