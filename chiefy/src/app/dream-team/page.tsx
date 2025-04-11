"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';

// Define team member types
interface TeamMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  position?: { x: number; y: number };
}

interface Contact {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

export default function DreamTeamPage() {
  // State for imported and placed team members
  const [contacts, setContacts] = useState<Contact[]>([
    { id: '1', name: 'Sarah Johnson', role: 'Architect', avatar: '/avatars/architect.png' },
    { id: '2', name: 'Michael Chen', role: 'Development Manager', avatar: '/avatars/developer.png' },
    { id: '3', name: 'Emma Davis', role: 'Construction Manager', avatar: '/avatars/construction.png' },
    { id: '4', name: 'John Smith', role: 'Quantity Surveyor', avatar: '/avatars/construction.png' },
    { id: '5', name: 'Alex Wong', role: 'Structural Engineer', avatar: '/avatars/architect.png' },
    { id: '6', name: 'Olivia Wilson', role: 'Interior Designer', avatar: '/avatars/developer.png' },
    { id: '7', name: 'William Brown', role: 'Project Manager', avatar: '/avatars/construction.png' },
    { id: '8', name: 'Sophia Garcia', role: 'Landscape Architect', avatar: '/avatars/architect.png' },
  ]);

  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [draggedMember, setDraggedMember] = useState<string | null>(null);
  const [isImportModalOpen, setIsImportModalOpen] = useState(false);
  const [newContactName, setNewContactName] = useState('');
  const [newContactRole, setNewContactRole] = useState('');
  const [showIntroModal, setShowIntroModal] = useState(true);
  
  const fieldRef = useRef<HTMLDivElement>(null);

  // Handle drag start for contact
  const handleDragStart = (contactId: string) => {
    setDraggedMember(contactId);
  };

  // Handle drop on field
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedMember || !fieldRef.current) return;

    const rect = fieldRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    // Find the contact being dragged
    const contact = contacts.find(c => c.id === draggedMember);
    if (!contact) return;

    // Check if the team member already exists
    const existingIndex = teamMembers.findIndex(tm => tm.id === draggedMember);
    
    if (existingIndex >= 0) {
      // Update the position of existing team member
      const updatedTeamMembers = [...teamMembers];
      updatedTeamMembers[existingIndex] = {
        ...updatedTeamMembers[existingIndex],
        position: { x, y }
      };
      setTeamMembers(updatedTeamMembers);
    } else {
      // Add new team member
      setTeamMembers([
        ...teamMembers,
        {
          ...contact,
          position: { x, y }
        }
      ]);
    }

    setDraggedMember(null);
  };

  // Handle drag over
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  // Handle import contacts
  const handleImportContact = () => {
    if (!newContactName || !newContactRole) return;
    
    const newContact: Contact = {
      id: `custom-${Date.now()}`,
      name: newContactName,
      role: newContactRole,
      avatar: '/avatars/developer.png' // Default avatar
    };
    
    setContacts([...contacts, newContact]);
    setNewContactName('');
    setNewContactRole('');
    setIsImportModalOpen(false);
  };

  // Handle remove team member
  const handleRemoveTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  // Handle export contacts
  const handleExportContacts = () => {
    // In a real app, this would create a shareable link or file
    alert('Your contacts have been prepared for sharing with your mates!');
  };

  // Role options for dropdown
  const roleOptions = [
    'Architect',
    'Development Manager',
    'Construction Manager',
    'Quantity Surveyor',
    'Structural Engineer',
    'Interior Designer',
    'Project Manager',
    'Landscape Architect',
    'Civil Engineer',
    'Electrical Engineer',
    'Mechanical Engineer',
    'Plumbing Contractor',
    'HVAC Specialist',
    'Building Inspector',
    'Real Estate Agent',
    'Property Developer'
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">My Dream Team</h1>
        <div className="flex space-x-4">
          <button 
            onClick={() => setIsImportModalOpen(true)}
            className="bg-[#6B4EFF] text-white px-4 py-2 rounded-lg hover:bg-[#5A3FE0] transition-colors"
          >
            Import Contacts
          </button>
          <button 
            onClick={handleExportContacts}
            className="bg-[#FFE600] text-black px-4 py-2 rounded-lg hover:bg-[#FFD600] transition-colors"
          >
            Share Contacts
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar with contacts */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Your Contacts</h2>
          <p className="text-sm text-gray-600 mb-4">Drag and drop contacts onto the field to build your dream team</p>
          <div className="space-y-3 max-h-[calc(100vh-300px)] overflow-y-auto">
            {contacts.map(contact => (
              <div 
                key={contact.id}
                draggable
                onDragStart={() => handleDragStart(contact.id)}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-grab hover:bg-gray-100 transition-colors"
              >
                <div className="w-10 h-10 rounded-full overflow-hidden relative bg-[#E8F1FF] flex items-center justify-center">
                  <Image 
                    src={contact.avatar} 
                    alt={contact.name}
                    width={40}
                    height={40}
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <h3 className="font-medium text-[#1A1A1A]">{contact.name}</h3>
                  <p className="text-sm text-gray-600">{contact.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Football field */}
        <div className="lg:col-span-3">
          <div 
            ref={fieldRef}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="relative bg-[#4CAF50] rounded-xl overflow-hidden h-[600px] shadow-md"
            style={{
              backgroundImage: "url('/field-bg.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Field markings */}
            <div className="absolute inset-0 flex flex-col">
              <div className="border-2 border-white border-opacity-70 m-4 rounded-lg flex-1 flex flex-col">
                {/* Center line */}
                <div className="border-b-2 border-white border-opacity-70 flex-1 relative">
                  {/* Center circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white border-opacity-70 rounded-full"></div>
                </div>
                <div className="flex-1"></div>
              </div>
            </div>

            {/* Placed team members */}
            {teamMembers.map(member => (
              <div 
                key={member.id}
                className="absolute flex flex-col items-center"
                style={{ 
                  left: `${member.position?.x ?? 0}%`, 
                  top: `${member.position?.y ?? 0}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="relative group">
                  <div className="w-16 h-16 rounded-full bg-white p-1 shadow-lg overflow-hidden">
                    <Image 
                      src={member.avatar} 
                      alt={member.name}
                      width={64}
                      height={64}
                      className="object-cover rounded-full"
                      unoptimized
                    />
                  </div>
                  <button 
                    onClick={() => handleRemoveTeamMember(member.id)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    ×
                  </button>
                </div>
                <div className="mt-1 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                  {member.name}
                </div>
                <div className="text-xs bg-[#FFE600] text-black px-2 py-0.5 rounded-md whitespace-nowrap">
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Import modal */}
      {isImportModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Import Contact</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={newContactName}
                  onChange={(e) => setNewContactName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4EFF]"
                  placeholder="Enter contact name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                  value={newContactRole}
                  onChange={(e) => setNewContactRole(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#6B4EFF]"
                >
                  <option value="">Select a role</option>
                  {roleOptions.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  onClick={() => setIsImportModalOpen(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleImportContact}
                  className="px-4 py-2 bg-[#6B4EFF] text-white rounded-lg"
                >
                  Add Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Introduction modal */}
      {showIntroModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 max-w-2xl">
            <h2 className="text-2xl font-bold mb-4 text-[#6B4EFF]">Build Your Property Development Dream Team</h2>
            <p className="mb-4">
              "Ever heard there's no shortcut to experience... well here at Chiefy we disagree. We provide you with all the tools you need to accelerate your skills in Property & Construction."
            </p>
            <div className="mb-6 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#6B4EFF] flex items-center justify-center text-white">1</div>
                <p><strong>Import your contacts</strong> and build your unique Property Development team</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#6B4EFF] flex items-center justify-center text-white">2</div>
                <p><strong>Drag and drop</strong> team members onto your field to position them</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#6B4EFF] flex items-center justify-center text-white">3</div>
                <p><strong>Exchange contacts</strong> with your mates and build your network</p>
              </div>
            </div>
            <button
              onClick={() => setShowIntroModal(false)}
              className="w-full py-3 bg-[#FFE600] text-black font-semibold rounded-lg hover:bg-[#FFD600] transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}