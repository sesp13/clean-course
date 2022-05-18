(() => {
  interface Bird {
    eat(): void;
  }

  interface FlyingBird {
    fly(): number;
  }

  interface RunningBird {
    run(): void;
  }

  interface SwimmerBird {
    swim(): void;
  }

  class Tucan implements Bird, FlyingBird {
    public eat() {}
    public fly(): number {
      return 100;
    }
  }

  class Hummingbird implements Bird, FlyingBird {
    public eat() {}
    public fly(): number {
      return 200;
    }
  }

  // El avestruz no vuela!!
  class Ostrich implements Bird, RunningBird {
    public eat() {}
    public run() {}
  }

  class Penguin implements Bird, SwimmerBird {
    public eat() {}
    public swim() {}
  }
})();
