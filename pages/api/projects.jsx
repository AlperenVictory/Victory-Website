export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/991008844496920606/1045381327190499348/Mineria_Hosting_Logo.png?width=400&height=400",
      name: "Mineria Hosting",
      description: "Mineria Hosting bir sanal sunucu VDS/VPS kiralama firmasıdır. Hem hızlı hem performanslı şekilde teslim edilir. Sizde VDS/VPS sorunu çekiyorsanız veya memnun değilseniz Mineria Hostingi tercih edebilirsiniz.",
      link: "https://mineriahosting.com.tr",
    },
    {
      id: 2,
      image: "https://cdn.discordapp.com/attachments/990693704815767592/1045380399695679508/unknown.png",
      name: "Victory Development",
      description: "Victory BOT'un destek sunucusu ve Discord Botlar hakkında yardım ettiğimiz bir geliştirici sunucusu.",
      link: "https://discord.gg/eE8tefxqT7",
    },
    {
      id: 3,
      image: "https://media.discordapp.net/attachments/991008844496920606/1045382300378091580/static.png?width=205&height=205",
      name: "Mineria Reklam Merkezi",
      description: "Mineria Reklam Merkezi bir bedavaya özel oda açtırarak veya reklam kanallarımızda sunucularınızın reklamını yaptırabileceğiniz bir platform.",
      link: "https://discord.gg/eE8tefxqT7",
    }
  ];
  res.status(200).json(data);
};
