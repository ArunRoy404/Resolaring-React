import React from 'react';
import CommonSection from '../CommonSection';
import SectionHeading from '../SectionHeading';
import { members } from '@/data/membersData';
import MemberCard from '../MemberCard';
import DecorationGrid from '../Decoration/DecorationGrid';

const MembersSection = () => {
    return (
        <CommonSection>
            <SectionHeading className={'text-left'}>
                Our Expert Member
            </SectionHeading>


            {/* Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {members.map((item, index) => (
                    <MemberCard key={item.id} member={item} index={index} />
                ))}
            </div>


            <DecorationGrid  reverse/>
        </CommonSection>
    );
};

export default MembersSection;