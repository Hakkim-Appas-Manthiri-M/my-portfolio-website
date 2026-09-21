import Contact from "../models/Contact.js";

const createContact = async (req, res) => {
  try {
    const {
      name,
      email,
      subject,
      message,
    } = req.body;

    /* ========================================
       REQUIRED FIELDS
    ======================================== */

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof subject !== "string" ||
      typeof message !== "string"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide valid contact information.",
      });
    }

    /* ========================================
       CLEAN INPUT
    ======================================== */

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    /* ========================================
       EMPTY VALIDATION
    ======================================== */

    if (
      !cleanName ||
      !cleanEmail ||
      !cleanSubject ||
      !cleanMessage
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Please fill in all required fields.",
      });
    }

    /* ========================================
       LENGTH VALIDATION
    ======================================== */

    if (cleanName.length > 100) {
      return res.status(400).json({
        success: false,
        message:
          "Name must be 100 characters or less.",
      });
    }

    if (cleanEmail.length > 150) {
      return res.status(400).json({
        success: false,
        message:
          "Email must be 150 characters or less.",
      });
    }

    if (cleanSubject.length > 200) {
      return res.status(400).json({
        success: false,
        message:
          "Subject must be 200 characters or less.",
      });
    }

    if (cleanMessage.length > 2000) {
      return res.status(400).json({
        success: false,
        message:
          "Message must be 2000 characters or less.",
      });
    }

    /* ========================================
       EMAIL VALIDATION
    ======================================== */

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      return res.status(400).json({
        success: false,
        message:
          "Please provide a valid email address.",
      });
    }

    /* ========================================
       SAVE CONTACT
    ======================================== */

    const contact = await Contact.create({
      name: cleanName,
      email: cleanEmail,
      subject: cleanSubject,
      message: cleanMessage,
    });

    /* ========================================
       RESPONSE
    ======================================== */

    return res.status(201).json({
      success: true,
      message:
        "Your message has been sent successfully.",

      data: {
        id: contact._id,
        createdAt: contact.createdAt,
      },
    });
  } catch (error) {
    console.error(
      "Create contact error:",
      error
    );

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while sending your message.",
    });
  }
};

export {
  createContact,
};