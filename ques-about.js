$(document).ready(function() {
    $('.question_tit').click(function() {
        const $currentSection = $(this).closest('div');
        const $iconPlus = $currentSection.find('.fa-plus');
        const $iconMinus = $currentSection.find('.fa-minus');
        const $answer = $currentSection.find('.answers_tit');

        // Check if the current section is already open
        const isOpen = $answer.is(':visible');

        // Close all sections
        $('.bor_pad_ques > div').each(function() {
            const $section = $(this);
            if (!$section.is($currentSection)) {
                $section.find('.answers_tit').slideUp(400);
                $section.find('.fa-minus').hide();
                $section.find('.fa-plus').show();
            }
        });

        // Toggle the clicked section
        if (isOpen) {
            // If the section was open, close it
            $answer.slideUp(400);
            $iconMinus.hide();
            $iconPlus.show();
        } else {
            // If the section was closed, open it
            $answer.slideDown(400);
            $iconPlus.hide();
            $iconMinus.show();
        }
    });
});