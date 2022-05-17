(() => {
  // No aplicando el principio de responsabilidad única
  type Gender = 'M' | 'F';
  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  class User extends Person {
    private lastAccess: Date;
    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  // Esta clase no cumple el principio de responsabilidad única!!

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/user/home',
    '/home',
    'sespinosarte888@gmail.com',
    'Admin',
    'Santiagop',
    'M',
    new Date('1999-10-13')
  );

  console.log({ userSettings, check: userSettings.checkCredentials() });
})();
