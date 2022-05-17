(() => {
  // Aplicando el principio de responsabilidad única
  // Priorizar la composición frente a la herencia

  type Gender = 'M' | 'F';

  interface PersonProps {
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    birthdate: Date;
    gender: Gender;
    name: string;
    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }

  class User {
    public email: string;
    private lastAccess: Date;
    public role: string;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  interface UserSettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
    email: string;
    role: string;
    name: string;
    gender: Gender;
    birthdate: Date;
  }

  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {
      this.person = new Person({ name, gender, birthdate });
      this.user = new User({ email, role });
      this.settings = new Settings({ workingDirectory, lastOpenFolder });
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: '/user/home',
    lastOpenFolder: '/home',
    email: 'sespinosarte888@gmail.com',
    role: 'Admin',
    name: 'Santiagop',
    gender: 'M',
    birthdate: new Date('1999-10-13'),
  });

  console.log({ userSettings, check: userSettings.user.checkCredentials() });
})();
