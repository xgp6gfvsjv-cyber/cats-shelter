document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('#meet-team-977 .filter-btn');
    const cats = document.querySelectorAll('#meet-team-977 .cs-card-group .cs-item');

    function applyFilter(filter) {
        cats.forEach(function (cat) {
            const age = cat.dataset.age;
            const gender = cat.dataset.gender;
            let show = true;

            if (filter === 'kitten') {
                show = age === 'kitten';
            } else if (filter === 'adult') {
                show = age === 'adult';
            } else if (filter === 'female') {
                show = gender === 'female';
            } else if (filter === 'male') {
                show = gender === 'male';
            } else {
                show = true; // 'all'
            }

            cat.style.display = show ? '' : 'none';
        });
    }

    buttons.forEach(function (btn) {
        btn.addEventListener('click', function () {
            buttons.forEach(function (b) {
                b.classList.remove('active');
            });
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            applyFilter(filter);
        });
    });

    // Set default active state on page load
    const defaultBtn = document.querySelector('#meet-team-977 .filter-btn[data-filter="all"]');
    if (defaultBtn) {
        defaultBtn.classList.add('active');
    }
});
