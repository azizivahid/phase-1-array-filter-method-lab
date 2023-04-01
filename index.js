// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    const matchingDrivers = drivers.filter(driver => {
      return driver.toLowerCase() === name.toLowerCase();
    });
  
   
    if (matchingDrivers.length === 0) {
      const caseInsensitiveMatches = drivers.filter(driver => {
        return driver.toLowerCase().includes(name.toLowerCase());
      });
      return caseInsensitiveMatches;
    }
  
    return matchingDrivers;
  }

  function fuzzyMatch(drivers, letters) {

    const matchingDrivers = drivers.filter(driver => {
      return driver.startsWith(letters);
    });
  
    return matchingDrivers;
  }

  function matchName(drivers, name) {

    const matchingDrivers = drivers.filter(driver => {
      return driver.name === name;
    });
  
    return matchingDrivers;
  }