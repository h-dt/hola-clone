package com.dreamteam.hola.service;

import com.dreamteam.hola.domain.Member;
import com.dreamteam.hola.dto.MemberDto;
import com.dreamteam.hola.util.jwt.Token;

public interface MemberService {


    void joinMember(Member member);

//    default Member dtoToDomain(MemberDto dto){
//
//        Member member = Member.builder()
//                .member_no(dto.getmember_no())
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

    boolean signup(MemberDto memberDto);

    Token signin(MemberDto memberDto);
}
