import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, ChevronLeft, ChevronRight, Sunrise, Sun, Moon } from 'lucide-react';

const DentalBooking = () => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('December 19, 2025');
  const [selectedTime, setSelectedTime] = useState('12:00 PM');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    notes: ''
  });

  // Date options for the calendar
  const dates = [
    { day: 'Tue', date: 'Dec 16,', year: '2025' },
    { day: 'Wed', date: 'Dec 17,', year: '2025' },
    { day: 'Thu', date: 'Dec 18,', year: '2025' },
    { day: 'Fri', date: 'Dec 19,', year: '2025' },
    { day: 'Sat', date: 'Dec 20,', year: '2025' },
    { day: 'Sun', date: 'Dec 21,', year: '2025' }
  ];

  // Time slots organized by period
  const timeSlots = {
    morning: [
      { time: '8:00 AM', available: true },
      { time: '8:30 AM', available: true },
      { time: '9:00 AM', available: true },
      { time: '9:30 AM', available: false },
      { time: '10:00 AM', available: false },
      { time: '10:30 AM', available: false },
      { time: '11:00 AM', available: false },
      { time: '11:30 AM', available: false }
    ],
    afternoon: [
      { time: '12:00 PM', available: false },
      { time: '12:30 PM', available: true },
      { time: '1:00 PM', available: false },
      { time: '1:30 PM', available: false },
      { time: '2:00 PM', available: true },
      { time: '2:30 PM', available: false },
      { time: '3:00 PM', available: false },
      { time: '3:30 PM', available: true },
      { time: '4:00 PM', available: false },
      { time: '4:30 PM', available: true },
      { time: '5:00 PM', available: false },
      { time: '5:30 PM', available: true }
    ],
    evening: [
      { time: '6:00 PM', available: false },
      { time: '6:30 PM', available: true },
      { time: '7:00 PM', available: false },
      { time: '7:30 PM', available: false },
      { time: '8:00 PM', available: true },
      { time: '8:30 PM', available: true },
      { time: '9:00 PM', available: false },
      { time: '9:30 PM', available: true },
      { time: '10:00 PM', available: true }
    ]
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setTimeout(() => setStep(2), 300);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleBooking = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTimeout(() => setStep(3), 300);
  };

  const TimeButton = ({ time, available }: { time: string; available: boolean }) => {
    const isSelected = selectedTime === time;
    return (
      <button
        onClick={() => handleTimeSelect(time)}
        disabled={!available}
        className={`w-full sm:w-auto px-4 py-2 md:px-6 md:py-3 rounded-lg border-2 font-medium text-sm transition-all duration-200 
          ${isSelected 
            ? 'bg-teal-600 border-teal-600 text-white' 
            : available 
              ? 'bg-white border-teal-600 text-teal-700 hover:bg-teal-50' 
              : 'bg-gray-100 border-gray-300 text-gray-400 cursor-not-allowed'
          }`}
      >
        {time}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Book Your <span className="text-teal-600">Dental Appointment</span>
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            Schedule a visit with our experienced dental professionals at a time that works best for you.
          </p>
        </div>

        {/* Step 1: Date and Time Selection */}
        {step === 1 && (
          <div className="animate-slide-up">
            {/* Date Selector */}
            <div className="bg-white rounded-2xl p-4 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Select a date</h2>
              <div className="flex items-center justify-between md:justify-center gap-2 md:gap-4 mb-8">
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>
                <div className="flex gap-3 overflow-x-auto">
                  {dates.map((date, index) => {
                    const dateStr = `${date.date} ${date.year}`;
                    const isSelected = selectedDate === dateStr;
                    return (
                      <div
                        key={index}
                        onClick={() => setSelectedDate(dateStr)}
                        className={`flex flex-col items-center px-6 py-4 rounded-xl cursor-pointer transition-all duration-200 min-w-[100px] md:min-w-[120px]
                        ${isSelected 
                          ? 'bg-teal-600 text-white' 
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <span className="font-semibold text-lg">{date.day}</span>
                        <span className="text-sm mt-1">{date.date}</span>
                        <span className="text-sm">{date.year}</span>
                      </div>
                    );
                  })}
                </div>
                <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Time Selector */}
            <div className="bg-white rounded-2xl p-4 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                Select a time on {selectedDate}
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Appointments are available in 30-minute intervals.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {/* Morning */}
                <div>
                  <div className="flex items-start gap-2 mb-4">
                    <Sunrise className="w-5 h-5 text-amber-500" />
                    <h3 className="text-xl font-bold text-gray-800">Morning</h3>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    {timeSlots.morning.map((slot, index) => (
                      <TimeButton key={index} time={slot.time} available={slot.available} />
                    ))}
                  </div>
                </div>

                {/* Afternoon */}
                <div>
                  <div className="flex items-start gap-2 mb-4">
                    <Sun className="w-5 h-5 text-orange-500" />
                    <h3 className="text-xl font-bold text-gray-800">Afternoon</h3>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    {timeSlots.afternoon.map((slot, index) => (
                      <TimeButton key={index} time={slot.time} available={slot.available} />
                    ))}
                  </div>
                </div>

                {/* Evening */}
                <div>
                  <div className="flex items-start gap-2 mb-4">
                    <Moon className="w-5 h-5 text-indigo-500" />
                    <h3 className="text-xl font-bold text-gray-800">Evening</h3>
                  </div>
                  <div className="flex flex-col items-start gap-2">
                    {timeSlots.evening.map((slot, index) => (
                      <TimeButton key={index} time={slot.time} available={slot.available} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Booking Form */}
        {step === 2 && (
          <div className="animate-slide-up">
            <div className="bg-white rounded-2xl p-6 md:p-10 max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">You are booking: Book Appointment</h2>
              <p className="text-gray-600 mb-8">
                December 18, 2025 12:00 pm - 12:30 pm Asia/Karachi
              </p>

              <form onSubmit={handleBooking} className="space-y-6">
                <div>
                  <label className="block text-gray-800 font-semibold mb-2">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    placeholder="Full name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-2">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-2">
                    Phone*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    placeholder="Phone"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-800 font-semibold mb-2">
                    Notes
                  </label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleFormChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-teal-600 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Book this Appointment
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="animate-scale-in">
            <div className="bg-white rounded-2xl p-6 md:p-12 max-w-2xl mx-auto text-center">
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-teal-600 rounded-full animate-bounce-in">
                <CheckCircle className="w-8 h-8 md:w-14 md:h-14 text-white" />
              </div>
              
              <h2 className="text-2xl md:text-4xl font-bold mb-4">Appointment Confirmed</h2>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                Your dental appointment is confirmed
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-teal-600" />
                  <span className="text-xl font-semibold">19 Dec, 2025</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-teal-600" />
                  <span className="text-xl font-semibold">5:30 PM – 6:00 PM</span>
                </div>
              </div>

              <p className="text-gray-600 mb-8 max-w-lg mx-auto">
                A confirmation email with your appointment details has been sent to your registered email address.
                <span className="font-semibold"> Please arrive 10 minutes early for check-in.</span>
              </p>

              <button
                onClick={() => setStep(1)}
                className="w-full md:w-auto bg-teal-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Book Another Appointment
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }

        .animate-slide-up {
          animation: slideUp 0.5s ease-out;
        }

        .animate-scale-in {
          animation: scaleIn 0.5s ease-out;
        }

        .animate-bounce-in {
          animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
      `}</style>
    </div>
  );
};

export default DentalBooking;