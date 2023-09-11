const theme = {
  color: {
    primaryColor: "#ff385c",
    secondaryColor: "#00848A",
  },
  textColor: {
    primaryColor: "#484848",
    secondaryColor: "#222",
  },
  mixins: {
    boderShadow: `
    transition: box-shadow 200ms ease;
    &:hover {
      box-shadow: 0 4px 2px rgba(0, 0, 0, 0.18);
    }

    `,
  },
};
export default theme;
