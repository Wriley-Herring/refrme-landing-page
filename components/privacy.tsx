// pages/privacy.js
import React from 'react';

const Privacy = () => {
  return (
    <div className="container mx-auto px-4 py-16 md:py-32">
      <div className="bg-white shadow-md rounded-lg p-6 md:p-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-6">Last Updated: January 1st, 2024</p>
        <p className="mb-6 text-gray-700">
          RefrMe ("we," "our," "us") is committed to protecting your privacy. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you visit our website (refrme.io) and our
          application (app.refrme.io), collectively referred to as the "Service." By accessing or using the Service, you
          agree to this Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">1. Information We Collect</h2>
        <p className="mb-6 text-gray-700">
          <strong>Personal Information:</strong> We may collect personally identifiable information, such as your name,
          email address, and phone number, when you create an account, use the Service, or communicate with us.
        </p>
        <p className="mb-6 text-gray-700">
          <strong>Usage Data:</strong> We may collect information about your interactions with the Service, such as the
          pages you visit, the links you click, and other actions you take.
        </p>
        <p className="mb-6 text-gray-700">
          <strong>Device Information:</strong> We may collect information about the device you use to access the
          Service, including the hardware model, operating system, browser type, IP address, and device identifiers.
        </p>
        <p className="mb-6 text-gray-700">
          <strong>Cookies and Tracking Technologies:</strong> We may use cookies, web beacons, and other tracking
          technologies to collect information about your use of the Service and to remember your preferences.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">2. How We Use Your Information</h2>
        <p className="mb-6 text-gray-700">We may use the information we collect for various purposes, including to:</p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li>Provide, maintain, and improve the Service;</li>
          <li>Process transactions and send you related information;</li>
          <li>Communicate with you, including responding to your comments, questions, and requests;</li>
          <li>Send you technical notices, updates, security alerts, and support messages;</li>
          <li>Monitor and analyze trends, usage, and activities in connection with the Service;</li>
          <li>Personalize your experience and provide advertisements, content, or features that match your interests;</li>
          <li>Detect, investigate, and prevent fraudulent transactions and other illegal activities and protect the rights and property of RefrMe and others;</li>
          <li>Comply with legal obligations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">3. How We Share Your Information</h2>
        <p className="mb-6 text-gray-700">We may share your information in the following circumstances:</p>
        <ul className="list-disc list-inside mb-6 text-gray-700">
          <li><strong>With Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service.</li>
          <li><strong>For Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li><strong>With Your Consent:</strong> We may share your information with third parties when we have your consent to do so.</li>
          <li><strong>For Legal Reasons:</strong> We may disclose your information if we believe it is necessary to comply with applicable laws, regulations, or legal processes, or to protect the rights, property, and safety of RefrMe, our users, and others.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">4. Your Choices</h2>
        <p className="mb-6 text-gray-700">
          <strong>Account Information:</strong> You may update, correct, or delete your account information at any time
          by logging into your account or contacting us.
        </p>
        <p className="mb-6 text-gray-700">
          <strong>Cookies:</strong> Most web browsers are set to accept cookies by default. You can usually adjust your
          browser settings to remove or reject cookies. Please note that removing or rejecting cookies could affect the
          availability and functionality of the Service.
        </p>
        <p className="mb-6 text-gray-700">
          <strong>Marketing Communications:</strong> You can unsubscribe from our marketing emails by following the
          instructions in those emails. If you opt out, we may still send you non-promotional communications, such as
          those about your account or our ongoing business relations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">5. Security</h2>
        <p className="mb-6 text-gray-700">
          We use reasonable administrative, technical, and physical measures to protect the information we collect.
          However, no security measures are perfect or impenetrable, and we cannot guarantee the security of your
          information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">6. Children's Privacy</h2>
        <p className="mb-6 text-gray-700">
          The Service is not intended for children under the age of 13. We do not knowingly collect personal information
          from children under 13. If we learn that we have collected personal information from a child under 13, we will
          take steps to delete such information as soon as possible.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">7. International Data Transfers</h2>
        <p className="mb-6 text-gray-700">
          We may transfer your information to, and process it in, countries other than your own. These countries may
          have data protection laws that are different from the laws of your country.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">8. Changes to This Privacy Policy</h2>
        <p className="mb-6 text-gray-700">
          We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
          Privacy Policy on the Service. Your continued use of the Service after the changes take effect constitutes your
          acceptance of the new Privacy Policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-gray-800">9. Contact Us</h2>
        <p className="mb-6 text-gray-700">If you have any questions about this Privacy Policy, please contact us at:</p>
        <p className="mb-6 text-gray-700">RefrMe</p>
        <p className="mb-6 text-gray-700">Email: hello@refrme.io</p>
      </div>
    </div>
  );
};

export default Privacy;

