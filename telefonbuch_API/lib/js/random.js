const names = [
    'Hans Müller', 'Anna Schmidt', 'Max Mustermann', 'Eva Meyer', 'Peter Schulze',
    'Laura Weber', 'Thomas Müller', 'Julia Schmidt', 'Michael Schulze', 'Sophia Meyer',
    'Andreas Weber', 'Sabine Müller', 'Daniel Schmidt', 'Lena Meyer', 'Markus Schulze',
    'Emilia Weber', 'Philip Müller', 'Lea Schmidt', 'Alexander Meyer', 'Jana Schulze',
    'Benjamin Weber', 'Katharina Müller', 'Felix Schmidt', 'Caroline Meyer',
    'Tim Schulze', 'Paula Weber', 'David Müller', 'Vanessa Schmidt', 'Lukas Meyer',
    'Marie Schulze', 'Valentin Weber', 'Johanna Müller', 'Emil Schmidt', 'Theresa Meyer'
  ];
  
  const generateRandomGermanNumber = () => {
    const prefix = Math.floor(Math.random() * 8 + 2);
    const areaCodeLength = Math.floor(Math.random() * 4) + 2;
    let areaCode = '';
    for (let i = 0; i < areaCodeLength; i++) {
      areaCode += Math.floor(Math.random() * 10);
    }
    const subscriberNumberLength = Math.floor(Math.random() * 5) + 1;
    let subscriberNumber = '';
    for (let i = 0; i < subscriberNumberLength; i++) {
      subscriberNumber += Math.floor(Math.random() * 10);
    }
  
    return `+49 ${prefix}${areaCode} ${subscriberNumber}`;
  }
  
  const generateRandomContacts = () => {
    const contacts = [];
    for (let i = 0; i < 111; i++) {
      contacts.push(`${names[i % names.length]} - ${generateRandomGermanNumber()}`);
    }
    return contacts;
  }
  
  console.log(generateRandomContacts());