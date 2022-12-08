export default async (req, res) => {
  const data = [
    {
      id: 1,
      image: "https://media.discordapp.net/attachments/1044633591587557477/1047911496698564739/mineriahostingpp.jpg?width=468&height=468",
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
      image: "https://media.discordapp.net/attachments/991008844496920606/1050447308321472512/150.png?width=144&height=144",
      name: "Victory Roleplay",
      description: "Victory Roleplay tecrübeli yetkili ekibi ile sizlere kaliteli rol sunan bir FiveM sunucusudur. 2019'dan beri TOP#1 sunucuları yönetmiş kaliteli yönetim ekibi ile en iyi rp deneyimini sunuyor. Sizleride Bekleriz :)",
      link: "https://discord.gg/tfJ72D6h",
    }
  ];
  res.status(200).json(data);
};
