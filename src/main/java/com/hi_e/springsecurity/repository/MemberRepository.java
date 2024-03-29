package com.hi_e.springsecurity.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.hi_e.role.Role;
import com.hi_e.springsecurity.entity.Member;

/**
 * 회원 정보를 관리하기 위한 Spring Data JPA Repository 인터페이스입니다.
 */
public interface MemberRepository extends JpaRepository<Member, Long> {

	/**
     * 이메일을 기반으로 회원을 찾습니다.
     *
     * @param email 찾을 회원의 이메일
     * @return 찾은 회원 정보(Optional)
     */
    Optional<Member> findByEmail(String email); 
    // Member타입이 아닌 Optional을 사용하는 이유는 null을 체크할 때 Member 타입은 클라이언트 코드에서 null을 체크해야함.
    
    /**
     * 이메일과 이름을 기반으로 회원을 찾습니다.
     *
     * @param email 찾을 회원의 이메일
     * @param ename 찾을 회원의 이름
     * @return 찾은 회원 정보(Optional)
     */
	Optional<Member> findByEmailAndEname(String email, String ename);
	
	/**
     * 회원 ID를 기반으로 회원을 찾습니다.
     *
     * @param id 찾을 회원의 ID
     * @return 찾은 회원 정보(Optional)
     */
	Optional<Member> findById(Long id);
    
	/**
     * 회원의 비밀번호를 업데이트하는 쿼리문입니다.
     *
     * @param email        업데이트할 회원의 이메일
     * @param newPassword  새로운 비밀번호
     */
    @Modifying
    @Query("UPDATE Member m SET m.pw = :newPassword WHERE m.email = :email")
    void updateMemberPassword(@Param("email") String email, @Param("newPassword") String newPassword);
    
    /**
     * 회원의 프로필 사진을 업데이트하는 쿼리문입니다.
     *
     * @param email       업데이트할 회원의 이메일
     * @param newPicture  새로운 프로필 사진 경로
     */
    @Modifying
    @Query("UPDATE Member m SET m.picture = :newPicture, m.filepath = :newFilePath WHERE m.email = :email")
    void updateMemberProfile(@Param("email") String email, @Param("newPicture") String newPicture, @Param("newFilePath") String newFilePath);
    
    @Modifying
    @Query("UPDATE Member m SET m.roles = :newRole WHERE m.id = :id")
    void updateMemberRole(@Param("id") Long id, @Param("newRole") Role newRole);
    
    @Query("SELECT m FROM Member m WHERE m.ename = :name")
    Page<Member> findByEname(@Param("name")String name, Pageable pageable);
    
    @Query("SELECT m FROM Member m WHERE m.id = :id")
    Page<Member> findById(@Param("id")Long id, Pageable pageable);

    @Query("SELECT m FROM Member m WHERE m.ename = :name AND m.roles = :roles")
    Page<Member> findByEname(@Param("name")String name, @Param("roles")Role roles, Pageable pageable);
    
    @Query("SELECT m FROM Member m WHERE m.id = :id AND m.roles = :roles")
    Page<Member> findById(@Param("id")Long id, @Param("roles")Role roles, Pageable pageable);
    
    
}