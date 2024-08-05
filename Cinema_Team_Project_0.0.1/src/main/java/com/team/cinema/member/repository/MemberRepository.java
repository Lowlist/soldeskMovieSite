//package com.team.cinema.member.repository;
//
//import java.util.List;
//import java.util.Optional;
//
//import org.apache.ibatis.annotations.Param;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.stereotype.Repository;
//
//import com.team.cinema.member.entity.AuthVO;
//import com.team.cinema.member.entity.Member;
//
//import jakarta.transaction.Transactional;
//
//@Repository
//public interface MemberRepository extends JpaRepository<Member, Integer> {
//    List<Member> findByNo(int no);
//    Optional<Member> findById(Integer id);
//    @Query("SELECT m FROM Member m LEFT JOIN FETCH m.auths WHERE m.id = :id")
//    List<Member> findByMemIDWithAuths(@Param("id") String id);
//    @Modifying
//    @Transactional
//    @Query("UPDATE Member m SET m.memPassword = :memPassword, m.memName = :memName, m.memAge = :memAge, m.memGender = :memGender, m.memEmail = :memEmail WHERE m.memID = :memID")
//    void updateMember(@Param("memPassword") String memPassword, 
//                      @Param("memName") String memName, 
//                      @Param("memAge") int memAge,
//                      @Param("memGender") String memGender,
//                      @Param("memEmail") String memEmail,
//                      @Param("memID") String memID);
//    @Modifying
//    @Transactional
//    void updateMemberProfile(@Param("memProfile") String memProfile, 
//                             @Param("memID") String memID);
//
////    @Repository
////    public interface AuthRepository extends JpaRepository<Auth, Long> {
////
////        // 엔티티를 직접 저장
////    }
//
//    
//    @Repository
//    public interface AuthRepository extends CrudRepository<AuthVO, Integer> {
//        @Modifying
//        @Transactional
//        @Query("DELETE FROM Auth a WHERE a.memID = :memID")
//        void deleteByMemID(@Param("memID") String memID);
//    }
//    
//    @Repository
//    public interface AuthRepository1 extends JpaRepository<AuthVO, Integer> {
//        List<AuthVO> findByMemID(String memID);
//    }    
//}
//    
//
//
