// const the application
const app = Vue.createApp({
  // template: "<h1>Hello World {{firstName}}</h1>", // similar to jsx
  data() {
    // data needs to be a function, and MUST return an object
    return {
      firstName: "John", // {{}} to access the data in the template
      lastName: "Doe",
      email: "john@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/10.jpg",
    };
  },
  methods: {
    // inside methods, you are able to access the variables defined in data
    // using this
    async getUser() {
      const res = await fetch("https://randomuser.me/api");
      const { results } = await res.json();

      this.firstName = results[0].name.first;
      this.lastName = results[0].name.last;
      this.email = results[0].email;
      this.gender = results[0].gender;
      this.picture = results[0].picture.large;
    },
  },
});

// mount the app onto html
// similar to ReactDom.render
app.mount("#app"); // reference html id
