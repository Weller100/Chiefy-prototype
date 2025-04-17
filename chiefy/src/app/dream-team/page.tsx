"use client";
import { useState, useRef } from 'react';
import Image from 'next/image';

// Define team member types
interface TeamMember {
  id: string;
  name: string;
  role: string;
  iconColor: string;
  iconType: string;
  position?: { x: number; y: number };
}

interface Contact {
  id: string;
  name: string;
  role: string;
  iconColor: string;
  iconType: string;
}

// Role icon mapping
const getRoleIcon = (role: string): {type: string, color: string} => {
  if (role.includes('Architect')) {
    return { type: 'building', color: '#4A9FFF' };
  } else if (role.includes('Manager') || role.includes('Director')) {
    return { type: 'chart', color: '#6B4EFF' };
  } else if (role.includes('Engineer')) {
    return { type: 'gear', color: '#FF8F4A' };
  } else if (role.includes('Designer')) {
    return { type: 'brush', color: '#E64AFF' };
  } else if (role.includes('Construction') || role.includes('Builder')) {
    return { type: 'tool', color: '#FF4A4A' };
  } else if (role.includes('Surveyor')) {
    return { type: 'ruler', color: '#4AFF88' };
  } else if (role.includes('Project')) {
    return { type: 'clipboard', color: '#FFCB4A' };
  } else if (role.includes('Landscape')) {
    return { type: 'tree', color: '#4AFFCB' };
  } else {
    return { type: 'person', color: '#A0A0A0' };
  }
};

// Icon component
const RoleIcon = ({ type, color, size = 24 }: { type: string; color: string; size?: number }) => {
  switch (type) {
    case 'building':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 2H5C3.9 2 3 2.9 3 4V20C3 21.1 3.9 22 5 22H19C20.1 22 21 21.1 21 20V4C21 2.9 20.1 2 19 2ZM9 20H7V10H9V20ZM13 20H11V10H13V20ZM13 8H11V6H13V8ZM17 20H15V10H17V20Z" fill={color}/>
        </svg>
      );
    case 'chart':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 13H7V21H3V13ZM10 9H14V21H10V9ZM17 5H21V21H17V5Z" fill={color}/>
        </svg>
      );
    case 'gear':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.14 12.94C19.18 12.64 19.2 12.33 19.2 12C19.2 11.68 19.18 11.36 19.13 11.06L21.16 9.48C21.34 9.34 21.39 9.07 21.28 8.87L19.36 5.54C19.24 5.33 18.99 5.26 18.77 5.33L16.38 6.29C15.88 5.91 15.35 5.59 14.76 5.35L14.32 2.84C14.28 2.61 14.07 2.43 13.84 2.43H10.16C9.92001 2.43 9.72001 2.61 9.68001 2.84L9.24001 5.35C8.65001 5.59 8.11001 5.92 7.62001 6.29L5.23001 5.33C5.01001 5.25 4.76001 5.33 4.64001 5.54L2.72001 8.87C2.60001 9.07 2.66001 9.34 2.84001 9.48L4.87001 11.06C4.82001 11.36 4.80001 11.69 4.80001 12C4.80001 12.31 4.82001 12.64 4.87001 12.94L2.84001 14.52C2.66001 14.66 2.61001 14.93 2.72001 15.13L4.64001 18.46C4.76001 18.67 5.01001 18.74 5.23001 18.67L7.62001 17.71C8.12001 18.09 8.65001 18.41 9.24001 18.65L9.68001 21.16C9.72001 21.39 9.92001 21.57 10.16 21.57H13.84C14.08 21.57 14.28 21.39 14.32 21.16L14.76 18.65C15.35 18.41 15.89 18.08 16.38 17.71L18.77 18.67C18.99 18.75 19.24 18.67 19.36 18.46L21.28 15.13C21.4 14.92 21.34 14.66 21.16 14.52L19.14 12.94ZM12 15.6C10.02 15.6 8.40001 13.98 8.40001 12C8.40001 10.02 10.02 8.4 12 8.4C13.98 8.4 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z" fill={color}/>
        </svg>
      );
    case 'brush':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 14C8.66 14 10 12.66 10 11V3H14V11C14 12.66 15.34 14 17 14H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V14H7Z" fill={color}/>
          <path d="M16 3C16 1.9 15.1 1 14 1H10C8.9 1 8 1.9 8 3H16Z" fill={color}/>
        </svg>
      );
    case 'tool':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.7 19L13.6 9.9C14.5 7.6 14 4.9 12.1 3C10.1 1 7.1 0.6 4.7 1.7L9 6L6 9L1.6 4.7C0.4 7.1 0.9 10.1 2.9 12.1C4.8 14 7.5 14.5 9.8 13.6L18.9 22.7C19.3 23.1 19.9 23.1 20.3 22.7L22.6 20.4C23.1 20 23.1 19.3 22.7 19Z" fill={color}/>
        </svg>
      );
    case 'ruler':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 6H3C1.9 6 1 6.9 1 8V16C1 17.1 1.9 18 3 18H21C22.1 18 23 17.1 23 16V8C23 6.9 22.1 6 21 6ZM12 15H10V13H12V15ZM16 15H14V13H16V15ZM8 15H6V13H8V15ZM16 11H14V9H16V11ZM12 11H10V9H12V11ZM8 11H6V9H8V11ZM20 15H18V9H20V15Z" fill={color}/>
        </svg>
      );
    case 'clipboard':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM10 17L6 13L7.41 11.59L10 14.17L16.59 7.58L18 9L10 17Z" fill={color}/>
        </svg>
      );
    case 'tree':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 19C13 19.55 12.55 20 12 20C11.45 20 11 19.55 11 19V13H8.5C7.12 13 6.72 11.2 7.93 10.45L11.93 7.95C11.97 7.93 12.03 7.93 12.07 7.95L16.07 10.45C17.28 11.2 16.88 13 15.5 13H13V19Z" fill={color}/>
          <path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3Z" fill={color}/>
        </svg>
      );
    case 'person':
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z" fill={color}/>
        </svg>
      );
  }
}

export default function DreamTeamPage() {
  // State for imported and placed team members
  const [contacts, setContacts] = useState<Contact[]>([
    { id: '1', name: 'Sarah Johnson', role: 'Architect', iconColor: '#4A9FFF', iconType: 'building' },
    { id: '2', name: 'Michael Chen', role: 'Development Manager', iconColor: '#6B4EFF', iconType: 'chart' },
    { id: '3', name: 'Emma Davis', role: 'Construction Manager', iconColor: '#FF4A4A', iconType: 'tool' },
    { id: '4', name: 'John Smith', role: 'Quantity Surveyor', iconColor: '#4AFF88', iconType: 'ruler' },
    { id: '5', name: 'Alex Wong', role: 'Structural Engineer', iconColor: '#FF8F4A', iconType: 'gear' },
    { id: '6', name: 'Olivia Wilson', role: 'Interior Designer', iconColor: '#E64AFF', iconType: 'brush' },
    { id: '7', name: 'William Brown', role: 'Project Manager', iconColor: '#FFCB4A', iconType: 'clipboard' },
    { id: '8', name: 'Sophia Garcia', role: 'Landscape Architect', iconColor: '#4AFFCB', iconType: 'tree' },
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
    
    // Get appropriate icon based on role
    const roleIcon = getRoleIcon(newContactRole);
    
    const newContact: Contact = {
      id: `custom-${Date.now()}`,
      name: newContactName,
      role: newContactRole,
      iconColor: roleIcon.color,
      iconType: roleIcon.type
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

  // Enhanced export contacts function
  const handleExportContacts = () => {
    // Create vCard format for each contact
    const vCards = teamMembers.map(member => {
      return `BEGIN:VCARD
VERSION:3.0
FN:${member.name}
TITLE:${member.role}
NOTE:Added from Chiefy Dream Team
END:VCARD`;
    }).join('\n');
    
    // Create a blob with the vCard data
    const blob = new Blob([vCards], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    
    // Create a download link and trigger it
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-dream-team-contacts.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    alert('Your contacts have been exported! Check your downloads folder.');
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
        <h1 className="text-3xl font-bold text-white">My Dream Team</h1>
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
            Save to Phone
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar with contacts */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-4 shadow-sm">
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
                <div className="w-10 h-10 rounded-full overflow-hidden relative bg-white flex items-center justify-center border-2" style={{ borderColor: contact.iconColor }}>
                  <RoleIcon type={contact.iconType} color={contact.iconColor} size={24} />
                </div>
                <div>
                  <h3 className="font-medium text-[#1A1A1A]">{contact.name}</h3>
                  <p className="text-sm text-gray-600">{contact.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* AFL Footy field with 3D effect */}
        <div className="lg:col-span-3">
          <div 
            ref={fieldRef}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="relative rounded-xl overflow-hidden h-[600px] shadow-lg"
            style={{
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.2) 100%)',
              backgroundBlendMode: 'overlay'
            }}
          >
            {/* Stadium background image - using the purple stadium image */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: "url('/images/stadium-background.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            ></div>
            
            {/* 3D field with perspective */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div 
                className="w-[90%] h-[85%] relative"
                style={{
                  transform: 'perspective(1000px) rotateX(15deg)',
                  transformStyle: 'preserve-3d',
                  background: 'transparent',
                  border: '4px solid white',
                  borderRadius: '8px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}
              >
                {/* AFL field markings */}
                <div className="absolute inset-2 border-2 border-white border-opacity-50 rounded-md flex">
                  {/* Center circle */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-white border-opacity-70 rounded-full"></div>
                  
                  {/* Center line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white bg-opacity-70"></div>
                  
                  {/* 50m arcs */}
                  <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white border-opacity-50 rounded-full"></div>
                  <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white border-opacity-50 rounded-full"></div>
                  
                  {/* Goal squares */}
                  <div className="absolute top-1/2 left-[5%] transform -translate-y-1/2 w-16 h-24 border-2 border-white border-opacity-70"></div>
                  <div className="absolute top-1/2 right-[5%] transform -translate-y-1/2 w-16 h-24 border-2 border-white border-opacity-70"></div>
                  
                  {/* Goal posts */}
                  <div className="absolute top-[calc(50%-30px)] left-[2%] w-1 h-[60px] bg-white"></div>
                  <div className="absolute top-[calc(50%-30px)] left-[8%] w-1 h-[60px] bg-white"></div>
                  <div className="absolute top-[calc(50%-30px)] right-[2%] w-1 h-[60px] bg-white"></div>
                  <div className="absolute top-[calc(50%-30px)] right-[8%] w-1 h-[60px] bg-white"></div>
                  
                  {/* Behind posts */}
                  <div className="absolute top-[calc(50%-20px)] left-[0%] w-0.5 h-[40px] bg-white"></div>
                  <div className="absolute top-[calc(50%-20px)] left-[10%] w-0.5 h-[40px] bg-white"></div>
                  <div className="absolute top-[calc(50%-20px)] right-[0%] w-0.5 h-[40px] bg-white"></div>
                  <div className="absolute top-[calc(50%-20px)] right-[10%] w-0.5 h-[40px] bg-white"></div>
                </div>
              </div>
            </div>

            {/* Field glow effect */}
            <div className="absolute inset-0 pointer-events-none z-5">
              <div className="w-full h-full bg-gradient-to-t from-purple-900 via-transparent to-transparent opacity-30"></div>
            </div>

            {/* Placed team members */}
            {teamMembers.map(member => (
              <div 
                key={member.id}
                className="absolute flex flex-col items-center z-20"
                style={{ 
                  left: `${member.position?.x ?? 0}%`, 
                  top: `${member.position?.y ?? 0}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="relative group">
                  <div className="w-16 h-16 rounded-full bg-white p-2 shadow-lg overflow-hidden border-2 flex items-center justify-center" style={{ borderColor: member.iconColor }}>
                    <RoleIcon type={member.iconType} color={member.iconColor} size={40} />
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
                <p><strong>Save contacts to your phone</strong> and exchange with your mates to build your network</p>
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