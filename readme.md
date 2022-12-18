
Semester project - FED 22
    by Ali Najimedini


Design:     
    https://www.figma.com/file/qlF8FOhvs9abM0xQ6D3gg5/Local-Museum-semester-project?node-id=8%3A399&t=qr2wmFOdx9fNtrnl-1


Live link:  
    https://bucolic-malabi-083660.netlify.app/

Instruction:
    This is my semester project report, where I will be explaining my code and decisions in best way i can.
    I will be going through my challenges and my solutions to those challanges.
    The project is design and development of a website for a museum named "Local Science Museum". LSM for short.


Main :
    Although I enjoy design quit a bit, I'm not particularly good at it, it's a fun and very necessary part of website development. Unfortunatly, my experience is very limited in this area so this was a challange.
    I did not use alot of time in the design, is fear of not being able to finish the code in time. I used less than 1 week of my 4 for the design and i only focused on lo-fi wireframe. I only used it for bouncing ideas of the wall and see if i could solve a structural problem like where to put navigation box.

    For the navigation box i exhibition spaces I wanted to have a bit unique shape rather than the good old square images. I wanted to represent science and at the same time be child friendly, so I desided to go with hexogon shaped images. Hexogons are common in nature and science. From bee hives to telescopes, science got a way of borrowing what nature has already fiquered out.

    The rest of the design is really simple. A bubble like blunt edged boxes that sit on top of eachother. 

    Home page was one of my main design challanges. Because I did not know what to fit in there. I needed texts thats for sure but not a long one. So "about us" copy would not make sense to me because... well I dont think anyone would read it. If someone is coming to the website it's most likely to find out about what they offer and what kind of spaces they have. I think that would be a better way of introducing site visiters about LSM. But of course I might be wrong and "about us" would sit well in home page. 
    Though if you're a kid do you really want to read how long the museum has been there? Or a long welcome paragraph? I would prefere to get to the page I'm looking for as soon as possible, but that's just me though.


Known issues:
    - In "explore page", content dropdowns actual toggle area does not match the visible box.
    - "back button" does not take you back, but to a previously set path.

To do:
    - Fit rest of introduction paragraphs to appropriate pages.
    - Add fitting animations to each "exhibition space" page.

.css structure:
    Every page has their own css styling file except for the 5 exhibition spaces, they have one common styling file and the main exhibition space has it's own styling file and borrows some codes from the common file.

    All files inside folder "common" is responsible for specific parts of the website:

    assembled:          Gathers all common css files in that folder to be used in individual styling files.
    body:               Styling all repeated elements such as root codes, font, heading title, chevrons, ...
    footer:             Styling of footer section.
    hamburgerMenu:      Styling of everything within the hamburger menu.
    header:             Styling everything inside header. such as logo and main nav. 
    variables:          All repeated units and css codes such as color and measuring.


Sources and resources:
    font: 
        https://fonts.google.com/specimen/Solway/tester?preview.text=Ecology%20&preview.text_type=custom
    Images
        Background pattern images: 
            https://www.vecteezy.com/vector-art/6836830-abstract-small-rounded-hexagon-line-geometric-overlapping-shape-blue-color-seamless-pattern-background-use-for-fabric-textile-interior-decoration-elements-upholstery-wrapping

        Chevrons and arrows:
            https://www.flaticon.com/free-icon/arrowhead-up_3838683?term=top%20arrow&page=1&position=3&page=1&position=3&related_id=3838683&origin=search


        https://www.vecteezy.com/photo/6671342-feathers-seamless-pattern-pattern-with-feathers-vector-flat-illustration

    Stack overflow:
        https://stackoverflow.com/questions/53805798/how-can-i-get-transitions-on-css-to-work-checkbox

        https://stackoverflow.com/questions/18984433/how-do-i-display-menu-items-in-front-of-images

    w3school:
        https://www.w3schools.com/css/css3_object-fit.asp

        https://www.w3schools.com/howto/howto_js_scroll_to_top.asp

        https://www.w3schools.com/html/html_form_input_types.asp


    clip path tool:
        https://bennettfeely.com/clippy/