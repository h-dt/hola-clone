package com.dreamteam.hola.service;

import com.dreamteam.hola.domain.Member;
import com.dreamteam.hola.dto.MemberDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

public interface MemberService {


    void joinMember(MemberDto memberdto);

//    default Member dtoToDomain(MemberDto dto){
//
//        Member member = Member.builder()
//                .member_id(dto.getMember_id())
//                .nickname(dto.getNickname())
//                .password(dto.getPassword())
//                .email(dto.getEmail())
//                .profile_image(dto.getProfile_image())
//                .role(dto.getRole())
//                .reg_date(dto.getReg_date())
//                .mod_date(dto.getMod_date())
//                .withdrawal_yn(dto.getWithdrawal_yn())
//                .withdrawal_date(dto.getWithdrawal_date())
//                .social_type(dto.getSocial_type())
//                .build();
//
//        return member;
//    }

}
