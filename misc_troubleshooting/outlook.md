Problem: Rails was mailing a password reset link with a pw reset token as a
query param. In Outlook, when a user clicked on the link, the browser went
to the site, but did not pick up the query params, so the user didn't see
the pw reset view.

Solution: Ensure that the link included an https:// prefix.
