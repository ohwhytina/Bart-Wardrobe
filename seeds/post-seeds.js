const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'Ut etiam sit amet nisl purus in mollis.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'Ut etiam sit amet nisl purus in mollis.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'Will it work?',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Will it work?',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Will it work?',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'Will it work?',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'Will it work?',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Will it work?',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'Will it work?',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'Will it work?',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    content: 'Will it work?',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'Will it work?',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    content: 'Will it work?',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Will it work?',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content: 'Will it work?',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content: 'Will it work?',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'Will it work?',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;