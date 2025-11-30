import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CalendarClock, MessageSquare } from 'lucide-react';
import { format } from 'date-fns';
import { toast } from '@/hooks/use-toast';

const availableTimeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM',
  '5:00 PM', '6:00 PM', '7:00 PM'
];

const eventTypes = [
  'UK Driving License Services', 'DVLA-Approved Full UK Driving License',
  'Provisional Driving License', 'Band & Point Removal Services',
  '🏗️ Construction & Worksite Certifications',
  '🛠️ CSCS Cards – Labourer, Skilled Worker, Supervisor, Manager',
  '🧱 CITB Health, Safety & Environment Test',
  '🏢 SMSTS (Site Management Safety Training Scheme)', 'Other'
];

const BookingCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [timeSlot, setTimeSlot] = useState<string>('');
  const [eventType, setEventType] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    details: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !timeSlot || !eventType) {
      toast({
        title: "Missing information",
        description: "Please select a date, time slot, and event type",
        variant: "destructive"
      });
      return;
    }

    const payload = {
      access_key: "6da99246-5c10-4887-9643-902c06764d38",
      subject: `New Booking - ${eventType}`,
      from_name: formData.name,
      email: formData.email,
      message: `
📅 Date: ${format(date, 'yyyy-MM-dd')}
⏰ Time: ${timeSlot}
🎯 Event Type: ${eventType}
👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
📍 Location: ${formData.location}
📝 Details: ${formData.details}
      `
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (result.success) {
        toast({
          title: "Booking submitted!",
          description: `Thanks! We'll contact you shortly.`,
        });

        // Reset
        setDate(undefined);
        setTimeSlot('');
        setEventType('');
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          details: ''
        });
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (error) {
      toast({
        title: "Failed to submit",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="glassmorphism p-6">
        <div className="flex items-center space-x-2 mb-4">
          <CalendarClock className="h-5 w-5 text-green-500" />
          <h3 className="text-xl font-medium">Select Date & Time</h3>
        </div>

        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          disabled={(date) =>
            date < new Date() ||
            date > new Date(new Date().setMonth(new Date().getMonth() + 6))
          }
          className="rounded-md border border-green-400/50 bg-gray-800"
        />

        <div className="mt-6">
          <label className="block text-gray-300 mb-2">Select Time Slot</label>
          <Select value={timeSlot} onValueChange={setTimeSlot}>
            <SelectTrigger className="bg-black border-green-400/50">
              <SelectValue placeholder="Select a time slot" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-green-400/50">
              {availableTimeSlots.map((time) => (
                <SelectItem key={time} value={time}>{time}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="mt-4">
          <label className="block text-gray-300 mb-2">Event Type</label>
          <Select value={eventType} onValueChange={setEventType}>
            <SelectTrigger className="bg-black border-green-400/50">
              <SelectValue placeholder="Select event type" />
            </SelectTrigger>
            <SelectContent className="bg-gray-900 border-green-400/50">
              {eventTypes.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="glassmorphism p-6">
        <div className="flex items-center space-x-2 mb-4">
          <MessageSquare className="h-5 w-5 text-green-500" />
          <h3 className="text-xl font-medium">Contact Information</h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" required />
          <Input name="email" type="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email" required />
          <Input name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Phone Number" required />
          <Input name="location" value={formData.location} onChange={handleInputChange} placeholder="Event Location" required />
          <Textarea name="details" value={formData.details} onChange={handleInputChange} rows={4} placeholder="Event Details" />

          <Button type="submit" className="w-full bg-green-500 hover:bg-green-600">
            Submit Booking
          </Button>
        </form>
      </div>
    </div>
  );
};

export default BookingCalendar;
