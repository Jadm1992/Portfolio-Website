import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-2">Contact</h2>
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <Input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} required />
        <Input type="email" placeholder="Your Email" value={email} onChange={e => setEmail(e.target.value)} required />
        <textarea
          placeholder="Your Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="border rounded-lg p-2 min-h-[120px] resize-none"
          required
        />
        {sent
          ? <div className="text-green-400 font-medium text-center">✅ Message Sent!</div>
          : <Button type="submit">Send Message</Button>}
      </form>
    </div>
  );
}
