function removeReels() {
  // These are common class names used for Reels in the feed and Explore
  const reelsSelectors = [
    'a[href*="/reels/"]',
    'div[role="button"]:has(svg[aria-label="Reels"])',
    'div[aria-label="Reels"]'
  ];

  reelsSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(el => {
      let parent = el.closest('article') || el.closest('div');
      if (parent) {
        parent.style.display = 'none';
      }
    });
  });
}

// Run initially
removeReels();

// Optionally run again every few seconds in case of dynamically loaded content
setInterval(removeReels, 3000);

