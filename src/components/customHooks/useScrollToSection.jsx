// Custom hook for scrolling functionality
const useScrollToSection = (sectionRefs) => {
  return (section) => {
    const elementRef = sectionRefs[section];
    if (elementRef.current) {
      window.scrollTo({
        top: elementRef.current.offsetTop,
        behavior: "smooth",
      });
    }
  };
};

export default useScrollToSection;
