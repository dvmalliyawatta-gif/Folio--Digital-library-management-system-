# Folio--Digital-library-management-system-
A full-stack digital library management system built with MERN. Supports online book reservations, rental tracking, overdue penalty management, and inventory control for readers, librarians, and admins.

🌟 Overview

DLMS digitises every aspect of a library's operations. Readers can browse the catalogue, reserve books online, and track their rentals. Librarians handle daily operations — approvals, handovers, returns, and penalties. Admins have full control over users, inventory, reports, and system settings.

✨ Features

    👤 Reader
    
    Browse & search books by title, author, ISBN, category, or genre
    Real-time availability status per book
    Online book reservation (max 3 books at a time)
    View rental history, due dates, and penalties
    In-app + email notifications for all rental events
    
    🏛️ Librarian
    
    Approve or reject reader reservations
    Record physical book handovers and returns
    View and collect overdue penalties
    Manage book inventory (add, edit, update stock)
    Look up any reader's rental and penalty summary
    
    🔧 Admin
    
    Full user management (create, suspend, deactivate)
    System-wide reports — rental trends, top books, penalty revenue
    Immutable audit log for all system actions
    Configure business rules — penalty rate, loan period, reservation window
    Approve high-value penalty waiver requests
    
👥 User Roles

Guest - Can browse and search the catalogue without logging inReader Can reserve books, view rental history, and manage their profile
Librarian - Manages daily operations — approvals, handovers, returns, and penalties
Admin - Full system access — users, reports, settings, and audit logs

📏 Business Rules

Max concurrent rentals - 3 books per reader
Reservation hold window - Book must be collected within 3 days of approval
Loan period - 21 days from physical handover date
Overdue penalty - Rs. 20 per day after the due date
Penalty accrual stop - Stops on the date the book is physically returned
Penalty waiver limit - Librarian can waive up to Rs. 500; above that requires Admin approval
Rental block - Readers with unpaid penalty > Rs. 500 cannot make new reservations

🗃️ Database Models

Core Collections
Users — readers, librarians, admins with role-based fields
Books — metadata, stock count, category reference
Categories — book categories and genres
Rentals — full lifecycle from reservation to return, penalty fields included
AuditLog — immutable record of every state-changing action
Notifications — in-app notification records per user
SystemSettings — configurable business rule values.
