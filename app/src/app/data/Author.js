const author = {
    firstName: 'Fawaz',
    lastName: 'Tahir',
    dob: '1988-12-27',
    jobTitle: 'Full Stack Developer',
    shortAbout: 'A personable, enthusiastic worker, quick learner, good team player and self motivated.',
    // Getters
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    get age() {
        const currentYear = new Date().getFullYear();
        const [birthYear] = this.dob.split('-');
        return currentYear - birthYear;
    }
}

export default author;