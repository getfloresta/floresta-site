/*
 * TryNow Component
 *
 * Displays the Floresta install script information.
 */

export default function TryNow() {
    return (
        <div className="min-h-screen bg-background">
          <h1>Try Floresta v0.8.0 now</h1>
          <br/>
          <p>Copy and paste this command to your terminal (debian-like for now).</p>
          <p>We recommend run this script on a fresh installation of a ubuntu:</p>
          <br/>
          <code>wget https://getfloresta.org/install.sh | bash</code>
        </div>
    );
}
