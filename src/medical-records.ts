export class MedicalRecordsService {
  constructor(private petclinicUrl: string) {}

  async getOwnerPets(ownerId: number) {
    const res = await fetch(`${this.petclinicUrl}/owners/${ownerId}/pets`);
    return res.json();
  }

  async getAllVisits() {
    const res = await fetch(`${this.petclinicUrl}/visits`);
    const data = await res.json();
    return data.map((v: any) => ({ date: v.date, desc: v.description, pet: v.petId }));
  }

  async searchOwners(lastName: string) {
    const res = await fetch(`${this.petclinicUrl}/owners?lastName=${lastName}`);
    return res.json();
  }
}

