const ABOUT_ME_TEXT = `
  lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
  mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
  ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
    `;

export const AboutMe: React.FC = () => {
  return (
    <div className='container rounded-3xl bg-gradient-to-b from-blue-300 to-indigo-500 px-6 py-6 sm:px-12 dark:from-blue-600 dark:to-indigo-900'>
      <h1 className='text-center text-4xl font-bold text-slate-800 dark:text-white'>About Me</h1>
      <p className='text-center text-lg text-slate-800 dark:text-white'>{ABOUT_ME_TEXT}</p>
    </div>
  );
};
