// Add copy buttons to all code blocks
function addCopyButtons() {
  // Find all pre > code elements
  const codeBlocks = document.querySelectorAll('pre > code');

  codeBlocks.forEach((codeBlock) => {
    const pre = codeBlock.parentElement;
    if (!pre) return;

    // Skip if button already exists
    if (pre.querySelector('.copy-code-button')) return;

    // Wrap in relative container if not already wrapped
    if (!pre.parentElement?.classList.contains('code-block-container')) {
      const wrapper = document.createElement('div');
      wrapper.className = 'code-block-container relative group';
      pre.parentNode?.insertBefore(wrapper, pre);
      wrapper.appendChild(pre);
    }

    // Create copy button
    const button = document.createElement('button');
    button.className = 'copy-code-button absolute top-2 right-2 p-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-2';
    button.setAttribute('aria-label', 'Copy code');
    button.innerHTML = `
      <svg class="copy-icon w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
      </svg>
      <svg class="check-icon w-5 h-5 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
    `;

    // Add click handler
    button.addEventListener('click', async () => {
      const codeText = codeBlock.textContent || '';

      try {
        await navigator.clipboard.writeText(codeText);

        // Show check icon
        const copyIcon = button.querySelector('.copy-icon');
        const checkIcon = button.querySelector('.check-icon');

        if (copyIcon && checkIcon) {
          copyIcon.classList.add('hidden');
          checkIcon.classList.remove('hidden');

          // Reset after 2 seconds
          setTimeout(() => {
            copyIcon.classList.remove('hidden');
            checkIcon.classList.add('hidden');
          }, 2000);
        }
      } catch (err) {
        console.error('Failed to copy code:', err);
      }
    });

    // Add button to the wrapper
    pre.parentElement?.appendChild(button);
  });
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', addCopyButtons);
} else {
  addCopyButtons();
}

// Re-initialize after view transitions (for Astro)
document.addEventListener('astro:page-load', addCopyButtons);
