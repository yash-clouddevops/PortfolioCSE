document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // Dropdown Menu
    // ======================
    const menuIcon = document.querySelector('.menu-icon');
    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownToggle = document.getElementById('dropdown-toggle');
    const dropdownMenu = document.getElementById('dropdown-menu');
    
    // Desktop dropdown
    if (menuIcon && dropdownContent) {
        menuIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownContent.classList.toggle('active');
            this.textContent = dropdownContent.classList.contains('active') ? '✕' : '☰';
        });
    }
    
    // Mobile dropdown
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdownMenu.classList.toggle('active');
            this.textContent = dropdownMenu.classList.contains('active') ? '✕' : '☰';
        });
    }
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        if (dropdownContent && !menuIcon.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove('active');
            menuIcon.textContent = '☰';
        }
        
        if (dropdownMenu && !dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
            dropdownMenu.classList.remove('active');
            dropdownToggle.textContent = '☰';
        }
    });
}); 