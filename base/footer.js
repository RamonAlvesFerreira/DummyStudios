verifyComponets();

function verifyComponets()
{
    var footers = document.getElementsByClassName('create-custom-footer');
    if(footers)
    {
        createFooter(footers);
    }
}
function createFooter (footers)
{
    for (const f of footers)
    {
        /*VARs*/
        var footer = document.createElement('footer');

        var div_content = document.createElement('div');

        /*Social media*/
        var div_social_links = document.createElement('div');

        var a_link_instagram = document.createElement('a');
        var img_link_instagram = document.createElement('img');

        var a_link_facebook = document.createElement('a');
        var img_link_facebook = document.createElement('img');

        var a_link_youtube = document.createElement('a');
        var img_link_youtube = document.createElement('img');

        var a_link_gamejolt = document.createElement('a');
        var img_link_gamejolt = document.createElement('img');

        var div_end_1 = document.createElement('div');
        var div_end_2 = document.createElement('div');
        var div_end_line = document.createElement('div');
        var div_img_dummy = document.createElement('div');

        /*Copntact Us*/
        var div_contact_info = document.createElement('div');

        var h4_contact_us = document.createElement('h4');
        var h4_email_support = document.createElement('h4');
        var h4_email_base = document.createElement('h4');

        /*RING*/
        var div_base_ring = document.createElement('div');
        var div_base_sponsor = document.createElement('div');

        var a_link_ring = document.createElement('a');
        var img_link_ring = document.createElement('img');

        /*End*/
        var h5_dummy_rights = document.createElement('h5');

        var img_dummy_doll = document.createElement('img');

        

        /*footer content*/
            div_content.classList.add('footer-container');
            /*social media*/
            div_social_links.classList.add('social-links');
            div_social_links.classList.add('text-left');
            div_social_links.classList.add('justify-content-end');

            /*1 - Instagram*/
                a_link_instagram.classList.add('component');
                a_link_instagram.classList.add('image-link');
                a_link_instagram.href = 'https://www.instagram.com/dummystudios_official/';
                a_link_instagram.target = '_blank';

                img_link_instagram.classList.add('social_media_img');
                img_link_instagram.src = 'https://i.imgur.com/3lpgG1p.png';
                img_link_instagram.height = 40;
                img_link_instagram.alt = 'Instagram';

                a_link_instagram.appendChild(img_link_instagram);
                div_social_links.appendChild(a_link_instagram);
                div_content.appendChild(div_social_links);

            /*2 - Facebook*/
                a_link_facebook.classList.add('component');
                a_link_facebook.classList.add('image-link');
                a_link_facebook.href = 'https://www.facebook.com/dummygamestudios/';
                a_link_facebook.target = '_blank';

                img_link_facebook.classList.add('social_media_img');
                img_link_facebook.src = 'https://i.imgur.com/l6YQ4zo.png';
                img_link_facebook.height = 40;
                img_link_facebook.alt = 'Facebook';

                a_link_facebook.appendChild(img_link_facebook);
                div_social_links.appendChild(a_link_facebook);
                div_content.appendChild(div_social_links);

            /*3 - Youtube*/
                a_link_youtube.classList.add('component');
                a_link_youtube.classList.add('image-link');
                a_link_youtube.href = 'https://www.youtube.com/channel/UCF5LvlZ3DSWDer-C1_GS3VA';
                a_link_youtube.target = '_blank';

                img_link_youtube.classList.add('social_media_img');
                img_link_youtube.src = 'https://i.imgur.com/CMGKg2c.png';
                img_link_youtube.height = 40;
                img_link_youtube.alt = 'YouTube';

                a_link_youtube.appendChild(img_link_youtube);
                div_social_links.appendChild(a_link_youtube);
                div_content.appendChild(div_social_links);

            /*4 - Gamejolt*/
                a_link_gamejolt.classList.add('component');
                a_link_gamejolt.classList.add('image-link');
                a_link_gamejolt.href = 'https://gamejolt.com/@Dummy_Studios';
                a_link_gamejolt.target = '_blank';

                img_link_gamejolt.classList.add('social_media_img');
                img_link_gamejolt.src = 'https://i.imgur.com/2ozpiPF.png';
                img_link_gamejolt.height = 40;
                img_link_gamejolt.alt = 'GameJolt';

                a_link_gamejolt.appendChild(img_link_gamejolt);
                div_social_links.appendChild(a_link_gamejolt);
                div_content.appendChild(div_social_links);


            footer.appendChild(div_content);

        /*Contact Info*/
            div_contact_info.classList.add('contact-info');
            div_contact_info.classList.add('text-center');

            h4_contact_us.classList.add('contact_us');
            h4_contact_us.innerHTML = 'CONTACT US:';
            div_contact_info.appendChild(h4_contact_us);

            h4_email_support.classList.add('email_contact_format');
            h4_email_support.innerHTML = 'support@studiosdummy.com';
            div_contact_info.appendChild(h4_email_support);

            h4_email_base.classList.add('email_contact_format');
            h4_email_base.innerHTML = 'studiosdummy@studiosdummy.com';
            div_contact_info.appendChild(h4_email_base);

            div_content.appendChild(div_contact_info);

        /*RING*/
        div_base_ring.classList.add('info');
        div_base_ring.classList.add('text-center');
        div_base_ring.classList.add('base_ring_div');

        div_base_sponsor.classList.add('sponsor-info');
        div_base_ring.appendChild(div_base_sponsor);

        a_link_ring.classList.add('component');
        a_link_ring.classList.add('image-link');
        a_link_ring.target = '_blank';
        a_link_ring.href = 'https://ringdevrj.com.br';

        a_link_ring.appendChild(img_link_ring);

        img_link_ring.width = 80;
        img_link_ring.height = 80;
        img_link_ring.alt = 'Patrocinador';
        img_link_ring.src = 'https://i.imgur.com/54r0Mq8.png';

        div_base_sponsor.appendChild(a_link_ring);        
        div_content.appendChild(div_base_ring);

        /*end line*/
            div_end_1.classList.add('col-xs-1');

            div_end_2.classList.add('Lines');
            div_end_2.classList.add('col-xs-10');

            div_end_1.appendChild(div_end_2);
            footer.appendChild(div_end_1);

        /*line*/
            div_end_line.classList.add('lineClassDivision');
            div_end_line.classList.add('col-xs-12');
            footer.appendChild(div_end_line);


            
        /*end rights image*/
            div_img_dummy.classList.add('info');
            div_img_dummy.classList.add('text-center');

            img_dummy_doll.src = 'https://i.imgur.com/eNxTgFj.png';
            img_dummy_doll.width=150;

            div_img_dummy.appendChild(img_dummy_doll);

            h5_dummy_rights.innerHTML = '© DUMMY STUDIOS, 2022 All Rights Reserved';

            div_img_dummy.appendChild(h5_dummy_rights);
        
        footer.appendChild(div_img_dummy);

        f.appendChild(footer);
    }
}