interface Location {
  lat: string;
  lng: string;
}

interface Markable {
  location: Location;
  getMarkContent(): string;
}

class User implements Markable {
  constructor(public name: string, public location: Location) {}
  getMarkContent() {
    return this.name;
  }
}

class Company implements Markable {
  constructor(
    public name: string,
    public location: Location,
    public tel: string
  ) {}

  getMarkContent() {
    return this.name + "," + this.tel;
  }
}

class CustomMap {
  addMarker(markable: Markable) {}
  getMarkContent(markable: Markable) {}
}
