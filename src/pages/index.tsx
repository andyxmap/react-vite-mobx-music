import Header from '@/components/common/Header';
import { useStoreContext } from '@/context/store';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import Card, { ListCard } from '@/components/view-objects/tecard';
import ViteIcon from '@/components/common/ViteIcon';
import { Typography } from '@material-tailwind/react';
import ReactIcon from '@/components/common/ReactIcon';
import Footer from '@/components/common/Footer';
import Icon from '@/components/common/Icon';

const Home = observer(() => {
  const content = {
    viteContent:
      'Powered by Vite. Build tool that aims to provide a faster and leaner development experience for modern web projects. Routing peers page is avaible similar Next JS',
    reactContent:
      'Created using React. Using a clean architecture, use of hooks, Mobx store management, tailwind material components and available reuse by components.',
    codeContent: {
      content:
        'I expected this starter project help you to decrease development time. I provide examples for avoid props drilling, use render props, create context and many others.',
      ref: ''
    }
  };

  return (
    <div className="w-full">
      <Header></Header>
      <div className=" min-h-screen mt-4 grid place-items-center w-full" id="to-visit">
        <ListCard>
          <Card img={<ViteIcon></ViteIcon>} content={<Typography>{content.viteContent}</Typography>}></Card>
          <Card img={<ReactIcon></ReactIcon>} content={<Typography>{content.reactContent}</Typography>}></Card>
          <Card
            img={<Icon></Icon>}
            content={
              <Typography>
                {content.codeContent.content}
                <span>
                  <a href={content.codeContent.ref} className="text-indigo-200">
                    See code in github
                  </a>
                </span>
              </Typography>
            }
          ></Card>
        </ListCard>
      </div>
      <div className="mt-4 bg-indigo-200">
        <Footer></Footer>
      </div>
    </div>
  );
});

export default Home;
