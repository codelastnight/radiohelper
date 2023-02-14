import { publish } from 'gh-pages';

publish(
    'build', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/codelastnight/radiohelper.git', // Update to point to your repository
        user: {
            name: process.env.USERNAME, // update to use your name
            email: process.env.EMAIL// Update to use your email
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);