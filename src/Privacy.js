import React from 'react'
import Sidebar from "./components/Privacy-Sidebar";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "./components/Footer";
import NavigationBar from "./components/NavigationBar"

export const Privacy = () => (
    <div>
     <NavigationBar /> 
    <Container className="mt-5 pt-5 mb-5">
    <Row>
      <Col md={3}>
        <Sidebar />
      </Col>
      <Col>
    <div class="article-container">
        <article id="content">
            <header id="pagmt">
                <h1> Privacy Policy </h1>
                <p> Last updated February 08, 2020</p>
            </header>
            <br />
            <section>
                <h3 id="welcome-to-asatera">
                    <a class="anchor" href="#welcome-to-asatera">Welcome to AsaTera</a>
                </h3>
                <br />
                <p>Thank you for choosing to be part of our community at AsaTera Media (“Company”, “we”, “us”, or “our”). We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us at info@asatera.com.</p>
                <br />
                <p>When you visit our website <a href="https://www.asatera.com">https://www.asatera.com</a>, and use our services, you trust us with your personal information. We take your privacy very seriously. In this privacy policy, we seek to explain to you in the clearest way possible what information we collect, how we use it and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important. If there are any terms in this privacy policy that you do not agree with, please discontinue use of our Sites and our services.</p>
                <br />
                <p> This privacy policy applies to all information collected through our website (such as <a href="https://www.asatera.com">https://www.asatera.com</a>), and/or any related services, sales, marketing or events (we refer to them collectively in this privacy policy as the "Services").</p>
                <br />
                <p>Please read this privacy policy carefully as it will help you make informed decisions about sharing your personal information with us.</p>
                <br />
                <p>This Privacy Policy is provided in a layered format. Click through to jump to a specific section.</p>
                <br />
                
                <ul className="a-ul">
                    <li><a href="#overview">OVERVIEW</a></li>
                    <li><a href="#what-information-do-we-collect">WHAT INFORMATION DO WE COLLECT?</a></li>
                    <li><a href="#how-do-we-use-your-information">HOW DO WE USE YOUR INFORMATION?</a></li>
                    <li><a href="#will-your-information-be-shared-with-anyone">WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a></li>
                    <li><a href="#do-we-use-cookies-and-other-tracking-technologies">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
                    <li><a href="#how-do-we-handle-your-social-logins">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a></li>
                    <li><a href="how-long-do-we-keep-your-information">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
                    <li><a href="#how-do-we-keep-your-information-safe">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
                    <li><a href="#do-we-collect-information-from-minors">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
                    <li><a href="what-are-your-privacy-rights">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
                    <li><a href="#data-breach">DATA BREACH</a></li>
                    <li><a href="#controls-for-do-not-track-features">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
                    <li><a href="#do-california-residents-have-specific-privacy-rights">DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
                    <li><a href="#do-we-make-updaes-to-this-policy">DO WE MAKE UPDATES TO THIS POLICY?</a></li>
                    <li><a href="#how-can-you-contact-us-about-this-policy">HOW CAN YOU CONTACT US ABOUT THIS POLICY?</a></li>
                    <li><a href="#how-can-you-review-update-or-delete-your-data">HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
                </ul>
                <br />
                <h3 id="overview"><a class="anchor" href="#overview">1. Overview</a></h3>
                <br />
                <p>AsaTera obtains Personal Data about you from various sources to provide our Services and to manage our Sites. “You” may be a visitor to one of our websites, a user of one or more of our Services (“User” or “AsaTera User”), or a customer of a User (“Customer”). If you are a Customer, AsaTera will generally not collect your Personal Data directly from you. Your agreement with the relevant AsaTera User should explain how the AsaTera User shares your Personal Data with AsaTera, and if you have questions about this sharing, then you should direct those questions to the AsaTera User.</p>
                <br />
                <h3 id="what-information-do-we-collect"><a class="anchor" href="#what-information-do-we-collect">1. What Information Do We Collect?</a></h3>
                <br />
                <p>Personal information you disclose to us</p>
                <br />
                <p>In Short:  We collect personal information that you provide to us.</p>
                <br />
                <p>We collect personal information that you voluntarily provide to us when registering at the Services expressing an interest in obtaining information about us or our products and services, when participating in activities on the Services or otherwise contacting us.</p>
                <br />
                <p>The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make and the products and features you use. The personal information we collect can include the following:</p>
                <br />
                <p>Publicly Available Personal Information. We collect first name, maiden name, last name, and nickname; email addresses; social media; and other similar data.</p> 
                <br />
                <p>Personal Information Provided by You. We collect financial information (credit card number, purchase history, invoices); and other similar data.</p>
                <br />
                <p>Payment Data. We collect data necessary to process your payment if you make purchases, such as your payment instrument number (such as a credit card number), and the security code associated with your payment instrument. All payment data is stored by Stripe. You may find their privacy policy link(s) here: <a href="https://stripe.com/privacy">https://stripe.com/privacy</a>.</p>
                <br />
                <p>Social Media Login Data. We may provide you with the option to register using social media account details, like your Facebook, Twitter or other social media account. If you choose to register in this way, we will collect the Information described in the section called "HOW DO WE HANDLE YOUR SOCIAL LOGINS" below.</p>
                <br />
                <p>All personal information that you provide to us must be true, complete and accurate, and you must notify us of any changes to such personal information.</p>
                <br />
                
                <h4>Information automatically collected</h4>
                <br />
                <p>In Short: Some information — such as IP address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
                <br />
                <p>We automatically collect certain information when you visit, use or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
                <br />
                <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
                <br />
                <p>Online Identifiers. We collect devices; tools and protocols, such as IP (Internet Protocol) addresses; cookie identifiers, or others such as the ones used for analytics and marketing; device's geolocation; and other similar data.</p>
                <br />
                
                
                <h3 id="how-do-we-use-your-information"><a class="anchor" href="#how-do-we-use-your-information">2. How Do We Use Your Information?</a></h3>
                <br />
                <p>In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>
                <br />
                <p>We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations. We indicate the specific processing grounds we rely on next to each purpose listed below.</p>
                <br />
                <h4>We use the information we collect or receive:</h4>
                <br />
                <p>To facilitate account creation and logon process. If you choose to link your account with us to a third party account (such as your Google or Facebook account), we use the information you allowed us to collect from those third parties to facilitate account creation and logon process for the performance of the contract. See the section below headed "HOW DO WE HANDLE YOUR SOCIAL LOGINS" for further information.</p>
                <br />
                <p>To send you marketing and promotional communications. We and/or our third party marketing partners may use the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt-out of our marketing emails at any time (see the "WHAT ARE YOUR PRIVACY RIGHTS" below).</p>
                <br />
                <p>To send administrative information to you. We may use your personal information to send you product, service and new feature information and/or information about changes to our terms, conditions, and policies.</p>
                <br />
                <p>To enforce our terms, conditions and policies for Business Purposes, Legal Reasons and Contractual.</p>
                <br />
                <p>To respond to legal requests and prevent harm. If we receive a subpoena or other legal request, we may need to inspect the data we hold to determine how to respond.</p>
                <br />
                <p>To manage user accounts. We may use your information for the purposes of managing our account and keeping it in working order.</p>
                <br />
                <p>For other Business Purposes. We may use your information for other Business Purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Services, products, marketing and your experience. We may use and store this information in aggregated and anonymized form so that it is not associated with individual end users and does not include personal information. We will not use identifiable personal information without your consent.</p>
                <br />
                
                <h3 id="will-your-information-be-shared-with-anyone"><a class="anchor" href="#will-your-information-be-shared-with-anyone">3. Will Your Information Be Shared With Anyone?</a></h3>
                <br />
                <p>In Short:  We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
                <br />
                <p>We may process or share data based on the following legal basis:
                Consent: We may process your data if you have given us specific consent to use your personal information in a specific purpose.</p>
                <br />
                <p>Legitimate Interests: We may process your data when it is reasonably necessary to achieve our legitimate business interests.</p>
                <br />
                <p>Performance of a Contract: Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.</p>
                <br />
                <p>Legal Obligations: We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process, such as in response to a court order or a subpoena (including in response to public authorities to meet national security or law enforcement requirements).</p>
                <br />
                <p>Vital Interests: We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to the safety of any person and illegal activities, or as evidence in litigation in which we are involved.</p>
                <br />
                <p>More specifically, we may need to process your data or share your personal information in the following situations:</p>
                <br />
                <p>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</p>
                <br />
                <p>Third-Party Advertisers. We may use third-party advertising companies to serve ads when you visit the Services. These companies may use information about your visits to our Website(s) and other websites that are contained in web cookies and other tracking technologies in order to provide advertisements about goods and services of interest to you.</p> 
                <br />
                <p>Affiliates. We may share your information with our affiliates, in which case we will require those affiliates to honor this privacy policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.</p>
                <br />
                <p>Business Partners. We may share your information with our business partners to offer you certain products, services or promotions.</p>
                <br />
                
                <h3 id="do-we-use-cookies-and-other-tracking-technologies"><a class="anchor" href="#do-we-use-cookies-and-other-tracking-technologies">4. Do We Use Cookies and Other Tracking Technologies?</a></h3>
                <br />
                <p>In Short:  We may use cookies and other tracking technologies to collect and store your information.</p>
                <br />
                <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Policy.</p>
                <br />

                <h3 id="how-do-we-handle-your-social-logins"><a class="anchor" href="#how-do-we-handle-your-social-logins">5. How Do We Handle Your Social Logins?</a></h3>
                <br />
                <p>In Short:  If you choose to register or log in to our services using a social media account, we may have access to certain information about you.</p>
                <br />
                <p>Our Services offer you the ability to register and login using your third party social media account details (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile Information we receive may vary depending on the social media provider concerned, but will often include your name, e-mail address, friends list, profile picture as well as other information you choose to make public.</p>
                <br />
                <p>We will use the information we receive only for the purposes that are described in this privacy policy or that are otherwise made clear to you on the Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third party social media provider. We recommend that you review their privacy policy to understand how they collect, use and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>
                <br />
                
                <h3 id="how-long-do-we-keep-your-information"><a class="anchor" href="#how-long-do-we-keep-your-information">6. How Long Do we Keep Your Information</a></h3>
                <br />
                <p>In Short:  We keep your information for as long as necessary to fulfill the purposes outlined in this privacy policy unless otherwise required by law.</p>
                <br />
                <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy, unless a longer retention period is required or permitted by law (such as tax, accounting or other legal requirements). No purpose in this policy will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
                <br />
                <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize it, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                <br />
                
                <h3 id="how-do-we-keep-your-information-safe"><a class="anchor" href="#how-do-we-keep-your-information-safe">7. How Do We Keep Your Information Safe?</a></h3>
                <br />
                <p>In Short:  We aim to protect your personal information through a system of organizational and technical security measures.</p>
                <br />
                <p>We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, please also remember that we cannot guarantee that the internet itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the services within a secure environment.</p>
                <br />

                <h3 id="do-we-collect-information-from-minors"><a class="anchor" href="#do-we-collect-information-from-minors">8. Do We Collect Information From Minors?</a></h3>
                <br />
                <p>In Short:  We do not knowingly collect data from or market to children under 18 years of age.</p>
                <br />
                <p>We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we have collected from children under age 18, please contact us at info@asatera.com.</p>
                <br />
                
                <h3 id="what-are-your-privacy-rights"><a class="anchor" href="#what-are-your-privacy-rights">9. What Are Your Privacy Rights?</a></h3>
                <br />
                <p>In Short:  You may review, change, or terminate your account at any time.</p>
                <br />
                <p>If you are resident in the European Economic Area and you believe we are unlawfully processing your personal information, you also have the right to complain to your local data protection supervisory authority. You can find their contact details here: <a href="http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">http://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.</p>
                <br />
                <p>If you have questions or comments about your privacy rights, you may email us at info@asatera.com.</p>
                <br />
                
                <p>Account Information</p>
                <br />
                <p>If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
                <br />
                    <p>■  Log into your account settings and update your user account.</p>
                <br />
                <p>Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, some information may be retained in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our Terms of Use and/or comply with legal requirements.</p>
                <br />
                <p>Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove cookies or reject cookies, this could affect certain features or services of our Services. To opt-out of interest-based advertising by advertisers on our Services visit <a href="http://www.aboutads.info/choices/">http://www.aboutads.info/choices/</a>.</p>
                <br />
                <p>Opting out of email marketing: You can unsubscribe from our marketing email list at any time by clicking on the unsubscribe link in the emails that we send or by contacting us using the details provided below. You will then be removed from the marketing email list – however, we will still need to send you service-related emails that are necessary for the administration and use of your account. To otherwise opt-out, you may:</p>
                <br />
                    <p>■  Access your account settings and update preferences.</p>
                <br />
                
                
                <h3 id="data-breach"><a class="anchor" href="#data-breach">10. Data Breach</a></h3>
                <br />
                <p>A privacy breach occurs when there is unauthorized access to or collection, use, disclosure or disposal of personal information. You will be notified about data breaches when AsaTera Media believes you are likely to be at risk or serious harm. For example, a data breach may be likely to result in serious financial harm or harm to your mental or physical well-being. In the event that AsaTera Media becomes aware of a security breach which has resulted or may result in unauthorized access, use or disclosure of personal information AsaTera Media will promptly investigate the matter and notify the applicable Supervisory Authority not later than 72 hours after having become aware of it, unless the personal data breach is unlikely to result in a risk to the rights and freedoms of natural persons.</p>
                <br />
                
                
                <h3 id="controls-for-do-not-track-features"><a class="anchor" href="#controls-for-do-not-track-features">11. Controls For Do-Not-Track Features</a></h3>
                <br />
                <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track (“DNT”) feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. No uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this privacy policy.</p>
                <br />
                
                
                <h3 id="do-california-residents-have-specific-privacy-rights"><a class="anchor" href="#do-california-residents-have-specific-privacy-rights">12. Do California Residents Have Specific Privacy Rights?</a></h3>
                <br />
                <p>In Short:  Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
                <br />
                <p>California Civil Code Section 1798.83, also known as the “Shine The Light” law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us using the contact information provided below.</p>
                <br />
                <p>If you are under 18 years of age, reside in California, and have a registered account with the Services, you have the right to request removal of unwanted data that you publicly post on the Services. To request removal of such data, please contact us using the contact information provided below, and include the email address associated with your account and a statement that you reside in California. We will make sure the data is not publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively removed from our systems.</p>
                <br />
                
                
                <h3 id="do-we-make-updates-to-this-policy"><a class="anchor" href="#do-we-make-updates-to-this-policy">13. Do We Make Updates To This Policy</a></h3>
                <br />
                <p>In Short:  Yes, we will update this policy as necessary to stay compliant with relevant laws.</p>
                <br />
                <p>We may update this privacy policy from time to time. The updated version will be indicated by an updated “Revised” date and the updated version will be effective as soon as it is accessible. If we make material changes to this privacy policy, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this privacy policy frequently to be informed of how we are protecting your information.</p>
                <br />
                
                
                <h3 id="how-can-you-contact-us-about-this-policy"><a class="anchor" href="#how-can-you-contact-us-about-this-policy">14. How Can You Contact Us About This Policy</a></h3>
                <br />
                <p>If you have questions or comments about this policy, you may email us at info@asatera.com</p>
                <br />
                
                <h3 id="how-can-you-review-update-or-delete-your-data"><a class="anchor" href="#how-can-you-review-update-or-delete-your-data">15. How Can You Review, Update, or, Delete The Data We Collect From You?</a></h3>
                <br />
                <p>Based on the laws of some countries, you may have the right to request access to the personal information we collect from you, change that information, or delete it in some circumstances. To request to review, update, or delete your personal information, please submit a request form by clicking <a href="mailto:info@asatera.com">here</a>. We will respond to your request within 30 days.
                </p>
                <br />

                        </section>
                    </article>
                </div>
            </Col>
        </Row>
    </Container>
<Footer />
</div>
);