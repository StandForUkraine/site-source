const donations = [ // old array of donations
  {
    logo: '/logos/nbu.png',
    logoAlt: `National bank of Ukraine`,
    title: `Armed Forces of Ukraine (IBAN)`,
    tags: ['Military'],
    description: `The National Bank of Ukraine has decided to open a special fundraising account to support the Armed Forces of Ukraine. This account accepts multiple currencies. It has been established and opened to receive transfers from international partners and donors in multiple currencies.`,
    link: 'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
    donateLink:
      'https://bank.gov.ua/en/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi',
  },
  {
    logo: '/logos/cba.png',
    title: `Come Back Alive Foundation`,
    tags: ['Military', 'Non-government', 'Medical'],
    description: `One of the largest charity foundations in Ukraine. We help veterans, in particular we coorganize Invictus Games in Ukraine. The money raised here will fund the operations of our media and veteran divisions.`,
    link: 'https://savelife.in.ua/en/',
    donateLink: 'https://savelife.in.ua/en/donate/',
  },
  {
    logo: '/logos/unicef.png',
    title: `The Ukraine Humanitarian Fund`,
    tags: ['Non-government', 'Humanitarian', 'Medical'],
    description: `The Ukrainian Humanitarian Fund is one of the UN's country-based pooled funds. Contributions are collected into a single, unearmarked fund and managed locally under UN leadership. As crises evolve, funds are made directly and immediately available to a wide range of partner organizations at the front lines of response. This way, funding reaches the people most in need when they need it.`,
    link: 'https://www.unocha.org/ukraine/donor-contributions',
    donateLink: 'https://crisisrelief.un.org/t/ukraine',
  },
  {
    logo: '/logos/uawg.png',
    title: `Ukrainian Women's Guard`,
    tags: ['Military', 'Non-government', 'Medical'],
    description: `Ukrainian voluntary women's organization, emerged in 2014 with the beginning of the Russo-Ukrainian war and began its activity with mass premedical training for women, it is combination of psychological and psychiatric training. Since 2014 more than 30,000 women across Ukraine passed our training.`,
    link: 'https://uavarta.org/en/',
    donateLink: 'https://uavarta.org/vnesok/',
  },
  {
    logo: '/logos/asos.png',
    title: `Army SOS`,
    tags: ['Military', 'Non-government', 'Non-lethal'],
    description: `Army SOS Citizen's Initiative coordinates people's efforts to help soldiers of Ukraine. Manages purchases of necessary ammunition, shields, intercommunication and reconnaissance facilities, uniforms and food supply. Delivers all goods directly to the unit's emplacement and pass them right to the hands of our warriors.`,
    link: 'https://armysos.com.ua/en/',
    donateLink: 'https://armysos.com.ua/en/help-the-army',
  },
  {
    logo: '/logos/rcros.png',
    title: `Ukrainian Red Cross Society`,
    tags: ['Non-government', 'Humanitarian', 'Medical'],
    description: `Anyone who got into trouble - loneliness, sickness, poverty, unemployment, loss of family links, emergency or armed conflict - may refer to the Red Cross.`,
    link: 'https://redcross.org.ua/',
    donateLink: 'https://redcross.org.ua/en/donate/',
  },
  {
    logo: '/logos/voc.png',
    title: `Voices of Children`,
    tags: ['Humanitarian', 'Non-government', 'Refugees'],
    description: `Charitable foundation Voices of Children helps children affected by the war in eastern Ukraine. We provide psychological and psychosocial support to help Ukrainian children overcome the consequences of armed conflict.`,
    link: 'https://voices.org.ua/en/who-we-are/',
    donateLink: 'https://voices.org.ua/en/donat/',
  },
  {
    logo: '/logos/uhu.png',
    title: `United Help Ukraine`,
    tags: ['Humanitarian', 'Non-government', 'Medical'],
    description: `United Help Ukraine is working to provide life-saving individual first aid kits (IFAKs containing blood-stopping bandages and tourniquets) and other emergency medical supplies to the front lines. In addition, UHU is also cooperating with other emergency response organizations to prepare humanitarian aid for civilians that might be directly affected if Russian forces attack.`,
    link: 'http://unitedhelpukraine.org/about-us',
    donateLink: 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=FAXD9R7CFB4SJ',
  },
  {
    logo: '/logos/razom.png',
    title: `Razom`,
    tags: ['Humanitarian', 'Non-government', 'Human Rights'],
    description: `Razom initiates short and long-term projects or collaborates on existing projects with partner organizations, which help Ukraine stay on the path of fostering democracy and prosperity. We've grown a diverse community of volunteers and collaborators across the US and Ukraine which allows us to create spaces where people can meet, partner, and execute these projects.`,
    link: 'https://razomforukraine.org/about-us/',
    donateLink: 'https://razomforukraine.org/donate/',
  },
  {
    logo: '/logos/rsu.png',
    title: `Revived Soldiers Ukraine`,
    tags: ['Humanitarian', 'Non-government', 'Medical'],
    description: `Revived Soldiers Ukraine is a non-profit organization dedicated to providing aid to the people of Ukraine in support of their fundamental human rights and medical rehabilitation of Ukrainian soldiers.`,
    link: 'https://www.rsukraine.org/about-us',
    donateLink: 'https://www.paypal.com/donate/?cmd=_s-xclick&hosted_button_id=EECANTTJNHN7Y',
  },
  {
    logo: '/logos/vsos.png',
    title: `Vostok SOS`,
    tags: ['Humanitarian', 'Non-government'],
    description: `Vostok SOS is a non-governmental organization helping to find shelter for internally displaced persons, assisting in the evacuation of people from the conflict zone, collecting and distributing humanitarian aid to IDPs in Kyiv as well as delivering humanitarian aid to front-line settlements, and providing psychological first aid.`,
    link: 'https://vostok-sos.org/en/about/mission/',
    donateLink: 'https://vostok-sos.org/en/make-a-donation/',
  },
  {
    logo: '/logos/molfar.png',
    title: `Molfar`,
    tags: ['Humanitarian', 'Non-government', 'Medical'],
    description: `Molfar(sorcerer-healer) is a project of the Ukrainian nongovernmental organization People's Victory. The project's aim is effective logistics system for the medical rescue of the wounded.`,
    link: 'http://molfar.org/en/about-us/vision-mission-goals',
    donateLink: 'http://molfar.org/en/take-part/donate/money',
  },
  // {
  //   logo: '/logos/pwings.png',
  //   title: `Phoenix Wings`,
  //   tags: ['Non-government', 'Military', 'Non-lethal', 'Medical'],
  //   description: `Charitable Foundation Phoenix Wings provides the Ukrainian army with the necessary assistance in regards to the appropriate equipment & uniform, personal non-lethal protection(vests, helmets), required treatment of the wounded soldiers, and acquisition the individual first aid kits, and repair of the buildings used by the army.`,
  //   link: 'http://wings-phoenix.org.ua/en/about-fund/',
  //   donateLink: 'http://wings-phoenix.org.ua/en/donate/',
  // },
  {
    logo: '/logos/pp.png',
    title: `People's Project`,
    tags: ['Non-government', 'Humanitarian', 'Military', 'Medical', 'Non-lethal'],
    description: `Ukraine's military and civil crowdfunding with multiple initiatives. People's Project is a non-commercial and nonprofit organization. It is an association made up of volunteers and caring people who coordinate their efforts for social initiatives aimed to support the People of Ukraine.`,
    link: 'https://www.peoplesproject.com/en/about/',
    donateLink: 'https://www.peoplesproject.com/en/projects/',
  },
]

const fs = require('fs')
const path = require('path')
const yaml = require('yaml')

for (const id in donations) {
  const doc = new yaml.Document()
  doc.contents = donations[id]
  fs.writeFileSync(path.join(__dirname, 'posts', (id * 1 + 1) + '.yml'), doc.toString())
}
