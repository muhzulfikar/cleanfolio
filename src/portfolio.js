const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://muhzulfikar.github.io/cleanfolio',
  title: 'MZ.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Muh Zulfikar',
  role: 'Software Engineer | QA',
  description:
    'Saya adalah seorang Software Engineer dan Quality Assurance yang berkomitmen untuk menyampaikan perangkat lunak berkualitas dengan kemampuan untuk mengidentifikasi masalah potensial dan memastikan berkinerja optimal. Sebagai seorang Software Engineer, saya telah merancang dan mengembangkan sistem yang efisien, serta berfokus pada peningkatan kualitas dan skalabilitas. Sebagai seorang QA Engineer, saya telah menguji perangkat lunak dan memastikan pemenuhan standar kualitas.',
  resume: 'https://drive.google.com/drive/folders/1W5ZC1a2h4YcQyffNeMmz6-tt-zvpxOxx?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/muh-zulfikar',
    github: 'https://github.com/muhzulfikar',
    behance: 'https://www.behance.net/',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Augmented Reality',
    description:
      'Augmented Reality Huruf Vokal sebuah game edukatif bagi anak-anak yang menampilkan huruf, benda dan hewan. Dalam game ini juga akan mengeluarkan suara saat object di klik.',
    stack: ['C#', 'Vuforia', 'Unity'],
    sourceCode: 'https://github.com/muhzulfikar/AR-LearnVowelWithAR',
    livePreview: 'https://github.com',
  },
  {
    name: 'Multiplayer Game',
    description:
      'Multiplayer Game sebuah prototype game multiplayer dengan Photon sebagai framework pengembangan permainan multi-player real-time.',
    stack: ['C#', 'Photon', 'Unity'],
    sourceCode: 'https://github.com/muhzulfikar/MultiplayerGame',
    livePreview: 'https://github.com',
  },
  {
    name: 'Feed the Animals',
    description:
      'Feed the Animals sebuah game memberi makan Hewan. Disini pemain akan memberi makan hewan dengan durasi yang sudah ditentukan dan nantinya akan mendapatkan score.',
    stack: ['C#', 'Unity'],
    sourceCode: 'https://github.com/muhzulfikar/FeedtheAnimals',
    livePreview: 'https://github.com',
  },
  {
    name: 'Ball Game',
    description:
      'Ball Game adalah game bola, disini pemain harus memasukan sebuah bola pada gawang lawan untuk memenangkan permainan.',
    stack: ['C#', 'Unity'],
    sourceCode: 'https://github.com/muhzulfikar/BallGame',
    livePreview: 'https://github.com',
  },
  {
    name: 'Main Menu',
    description:
      'Main Menu adalah sebuah prototype menu untuk game. Menu tersebut dapat berpindah halaman dan menampilkan pop up ketika button menu di klik.',
    stack: ['C#', 'Unity'],
    sourceCode: 'https://github.com/muhzulfikar/MainMenuInUnity',
    livePreview: 'https://github.com',
  },
  {
    name: 'Air Plane Game',
    description:
      'Air Plane Game sebuah game pesawat yang harus melewati rintangan. Apabila pemain dapat melewati sebuah tembok rintangan, pemain akan menang.',
    stack: ['C#', 'Unity'],
    sourceCode: 'https://github.com/muhzulfikar/AirPlaneGame',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Adobe Illustrator',
  'Blender 3D',
  'C#',
  'CSS',
  'Figma',
  'Git',
  'Gitlab',
  'Github',
  'HTML',
  'JavaScript',
  'Material UI',
  'Postman',
  'PlasticSCM',
  'Unity 3D Engine',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mzul8480@gmail.com',
}

export { header, about, projects, skills, contact }
