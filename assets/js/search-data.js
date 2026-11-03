// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "news-zenflow-has-been-officially-adopted-into-deepspeed-and-featured-on-the-pytorch-blog",
          title: 'ZenFlow has been officially adopted into DeepSpeed and featured on the PyTorch Blog!...',
          description: "",
          section: "News",},{id: "news-i-have-joined-the-cs-phd-program-at-uva",
          title: '🎉 I have joined the CS PhD program at UVA.',
          description: "",
          section: "News",},{id: "news-zenflow-has-been-accepted-to-sigmod-2027",
          title: '🎉 ZenFlow has been accepted to SIGMOD 2027!',
          description: "",
          section: "News",},{id: "news-our-looseleaf-paper-is-now-on-arxiv",
          title: '📄 Our LooseLeaf paper is now on arXiv.',
          description: "",
          section: "News",},{id: "news-we-launched-looseleaf-a-jupyter-notebook-platform-with-serverless-gpus-now-open-to-everyone-at-uva",
          title: '🚀 We launched LooseLeaf, a Jupyter notebook platform with serverless GPUs, now open...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%78%72%6E%34%75%62@%76%69%72%67%69%6E%69%61.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/JoshWoo2003", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
