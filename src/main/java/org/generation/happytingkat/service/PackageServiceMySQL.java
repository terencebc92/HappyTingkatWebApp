package org.generation.happytingkat.service;

import org.generation.happytingkat.repository.entity.Package;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class PackageServiceMySQL implements PackageService {

    public PackageServiceMySQL() {}
    @Override
    public List<Package> all() {
        return null;
    }

    @Override
    public void delete(int packageId) {

    }

    @Override
    public Package findById(int packageId) {
        return null;
    }
}
