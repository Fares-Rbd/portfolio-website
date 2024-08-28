function toggleMenu() {
  const menu = document.querySelector('.menu-links');
  const icon = document.querySelector('.hamburger-icon span');

  // Toggle the menu visibility
  menu.classList.toggle('open');

  // Apply fade-out effect to the current icon
  icon.classList.add('fade-out');

  // Change the icon after the fade-out animation is done
  setTimeout(() => {
    if (menu.classList.contains('open')) {
      icon.textContent = 'menu_open';
    } else {
      icon.textContent = 'menu';
    }
    // Remove fade-out and apply fade-in effect
    icon.classList.remove('fade-out');
    icon.classList.add('fade-in');
  }, 100); // Match the timeout to the transition duration (0.3s)

  // Clean up the fade-in class after the animation completes
  icon.addEventListener(
    'animationend',
    () => {
      icon.classList.remove('fade-in');
    },
    { once: true },
  );
}
